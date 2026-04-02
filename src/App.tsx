import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, Copy, ChevronLeft, User, Info, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { questions } from './data/questions';
import { results } from './data/results';
import { Indicator, indicatorDescriptions } from './data/indicators';


export default function App() {
  const [step, setStep] = useState<'start' | 'test' | 'result'>('start');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [resultCode, setResultCode] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const confettiCanvasRef = useRef<HTMLCanvasElement>(null);
  const [confettiInstance, setConfettiInstance] = useState<any>(null);

  useEffect(() => {
    if (confettiCanvasRef.current && !confettiInstance) {
      const instance = confetti.create(confettiCanvasRef.current, {
        resize: true,
        useWorker: true,
      });
      setConfettiInstance(() => instance);
    }
  }, []);

  const selectedValue = step === 'test' ? answers[questions[currentIdx]?.id] : null;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const resultFromUrl = params.get('result');
    if (resultFromUrl && results[resultFromUrl]) {
      setResultCode(resultFromUrl);
      setStep('result');
    }
  }, []);

  const handleAnswer = (score: number) => {
    const newAnswers = { ...answers, [questions[currentIdx].id]: score };
    setAnswers(newAnswers);

    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const handleBack = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    } else {
      setStep('start');
    }
  };

  const calculateResult = (finalAnswers: Record<number, number>) => {
    // 모든 지표의 점수를 0으로 초기화
    const indicatorScores: Record<string, number> = {
      E: 0, I: 0, S: 0, C: 0, D: 0, G: 0, A: 0, U: 0
    };

    // 각 질문에 대해 가중치 계산
    questions.forEach(q => {
      const score = finalAnswers[q.id];
      if (score === 5) { // '그렇다' 선택 시
        q.weights.forEach(w => {
          indicatorScores[w.indicator] += w.score;
        });
      }
      // '아니다' 선택 시에는 점수를 주지 않음 (필요 시 로직 확장 가능)
    });

    const res = [
      (indicatorScores['E'] > indicatorScores['I']) ? 'E' : 'I',   // I 우세 (후반 지표)
      (indicatorScores['S'] > indicatorScores['C']) ? 'S' : 'C',   // C 우세 (후반 지표)
      (indicatorScores['G'] > indicatorScores['D']) ? 'G' : 'D',   // D 우세 (D가 후반 지표 + D가 Tie-breaker)
      (indicatorScores['A'] > indicatorScores['U']) ? 'A' : 'U'    // U 우세 (후반 지표)
    ].join('');

    setResultCode(res);
    setStep('result');

    // 결과 주소 업데이트
    const url = new URL(window.location.href);
    url.searchParams.set('result', res);
    window.history.pushState({}, '', url);

    if (confettiInstance) {
      confettiInstance({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00D2FF', '#1144DD', '#ffffff'],
        zIndex: -1 // 캔버스 내부 z-index (보통 캔버스 자체가 낮으면 필요 없음)
      });
    }
  };

  const reset = () => {
    setStep('start');
    setCurrentIdx(0);
    setAnswers({});

    // URL 쿼리 초기화
    const url = new URL(window.location.href);
    url.searchParams.delete('result');
    window.history.pushState({}, '', url);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('클립보드에 복사되었습니다! ✨');
  };

  const currentResult = results[resultCode] || results['DEFAULT'];

  return (
    <div className="min-h-screen">
      <canvas
        ref={confettiCanvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />
      <div className={`relative z-10 mx-auto min-h-screen flex flex-col items-center justify-center p-4 transition-all duration-500 ${step === 'result' ? 'max-w-4xl' : 'max-w-md'}`}>
        <AnimatePresence mode="wait">
          {step === 'start' && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="vrc-panel text-center w-full"
            >
              <div className="mb-6 inline-block p-3 rounded-full bg-vrc-neon/10 text-vrc-neon">
                <User size={48} />
              </div>
              <h1 className="text-4xl font-black mb-2 tracking-tighter text-vrc-neon">VRCTI</h1>
              <p className="text-gray-400 mb-8 font-medium">VRChat Type Indicator<br /><span className="text-xs text-gray-500">당신의 가상 세계 플레이 성향은?</span></p>
              <button onClick={() => setStep('test')} className="vrc-button w-full text-lg">테스트 시작하기</button>
              <div className="mt-8 flex justify-center gap-4 text-[10px] text-gray-600 uppercase tracking-widest">
                <span>#VRChat</span>
                <span>#VRCTI</span>
                <span>#MBTI</span>
              </div>
            </motion.div>
          )}

          {step === 'test' && (
            <motion.div
              key="test"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="vrc-panel w-full"
            >
              <div className="flex items-center justify-between mb-8 -mt-2">
                <button
                  onClick={handleBack}
                  className="p-2 -ml-2 text-gray-500 hover:text-vrc-neon transition-colors group flex items-center gap-1"
                >
                  <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">BACK</span>
                </button>

                <div className="flex justify-between text-[10px] text-vrc-neon font-mono tracking-tighter gap-4">
                  <span>QUESTION {currentIdx + 1}/{questions.length}</span>
                  <span>{Math.round(((currentIdx + 1) / questions.length) * 100)}%</span>
                </div>
              </div>

              <div className="mb-8">
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-vrc-neon shadow-[0_0_10px_rgba(0,210,255,0.5)]"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              <h2 className="text-xl font-bold mb-12 min-h-[7rem] flex items-center justify-center leading-relaxed text-center break-keep">
                {questions[currentIdx].text}
              </h2>

              <div className="flex gap-4">
                <button
                  onClick={() => handleAnswer(5)}
                  className={`flex-1 p-8 rounded-3xl border-2 transition-all group flex flex-col items-center justify-center gap-2 ${selectedValue === 5
                    ? 'border-vrc-neon bg-vrc-neon/20 shadow-[0_0_20px_rgba(0,210,255,0.2)]'
                    : 'border-white/10 bg-white/5 hover:border-vrc-neon hover:bg-vrc-neon/20 hover:shadow-[0_0_20px_rgba(0,210,255,0.2)]'
                    }`}
                >
                  <div className={`text-6xl font-black transition-all group-hover:scale-110 group-hover:text-vrc-neon group-hover:drop-shadow-[0_0_15px_rgba(0,210,255,0.5)] ${selectedValue === 5 ? 'text-vrc-neon drop-shadow-[0_0_15px_rgba(0,210,255,0.5)]' : 'text-gray-700'
                    }`}>O</div>
                  <div className={`text-xs font-bold transition-colors group-hover:text-vrc-neon ${selectedValue === 5 ? 'text-vrc-neon' : 'text-gray-600'
                    }`}>그렇다</div>
                </button>
                <button
                  onClick={() => handleAnswer(1)}
                  className={`flex-1 p-8 rounded-3xl border-2 transition-all group flex flex-col items-center justify-center gap-2 ${selectedValue === 1
                    ? 'border-red-500 bg-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.2)]'
                    : 'border-white/10 bg-white/5 hover:border-red-500 hover:bg-red-500/20 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]'
                    }`}
                >
                  <div className={`text-6xl font-black transition-all group-hover:scale-110 group-hover:text-red-500 group-hover:drop-shadow-[0_0_15px_rgba(239,68,68,0.5)] ${selectedValue === 1 ? 'text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]' : 'text-gray-700'
                    }`}>X</div>
                  <div className={`text-xs font-bold transition-colors group-hover:text-red-500 ${selectedValue === 1 ? 'text-red-500' : 'text-gray-600'
                    }`}>아니다</div>
                </button>
              </div>
            </motion.div>
          )}

          {step === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="vrc-panel w-full md:text-left"
            >
              <div className="md:grid md:grid-cols-[1fr_1.2fr] md:gap-12 md:items-start">
                {/* Left Column: Visuals and Summary */}
                <div className="flex flex-col items-center md:items-center text-center">
                  <div className="text-vrc-neon font-mono text-sm mb-4">당신의 가상 세계 플레이 성향</div>

                  <div className="relative mb-6 group">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                      className="w-56 h-56 mx-auto rounded-3xl overflow-hidden border-2 border-vrc-neon/30 p-1 bg-gradient-to-br from-vrc-neon/10 to-transparent relative shadow-[0_0_30px_rgba(0,210,255,0.15)]"
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,210,255,0.15)_0%,transparent_70%)] group-hover:opacity-100 opacity-50 transition-opacity" />
                      {currentResult.boothUrl ? (
                        <a
                          href={currentResult.boothUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full h-full relative"
                        >
                          <img
                            src={currentResult.avatar}
                            alt={currentResult.nickname}
                            className="w-full h-full object-cover rounded-[1.4rem] grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-[1.4rem]">
                            <span className="text-[10px] font-black text-vrc-neon tracking-widest border border-vrc-neon px-2 py-1 rounded-sm bg-black/50">GO TO BOOTH</span>
                          </div>
                        </a>
                      ) : (
                        <img
                          src={currentResult.avatar}
                          alt={currentResult.nickname}
                          className="w-full h-full object-cover rounded-[1.4rem] grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
                        />
                      )}
                    </motion.div>
                  </div>

                  <div className="inline-block px-4 py-1.5 rounded-full bg-vrc-neon/10 text-vrc-neon text-sm font-bold mb-4 border border-vrc-neon/20 shadow-[0_0_20px_rgba(0,210,255,0.1)]">
                    {currentResult.nickname}
                  </div>

                  <h2 className="text-6xl font-black mb-8 text-white tracking-[0.25em] font-mono drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                    {resultCode}
                  </h2>

                  <p className="text-gray-300 leading-relaxed text-left bg-black/30 p-4 rounded-lg border border-white/5 text-sm">
                    {currentResult.description}
                  </p>
                </div>

                {/* Right Column: Detailed Analysis and Actions */}
                <div className="mt-12 md:mt-0 space-y-8 flex flex-col">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-vrc-neon text-xs font-bold uppercase tracking-wider">세부 분석</h3>
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="text-[10px] text-gray-500 hover:text-vrc-neon flex items-center gap-1 transition-colors uppercase font-bold"
                      >
                        <Info size={12} /> 전체 지표 보기
                      </button>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {resultCode.split('').map((char, idx) => {
                        const info = indicatorDescriptions[char as Indicator];
                        if (!info) return null;
                        return (
                          <div key={idx} className="bg-white/5 p-3 rounded-xl border border-white/5 flex gap-3 items-center">
                            <div className="w-8 h-8 rounded-lg bg-vrc-neon/10 flex items-center justify-center text-vrc-neon font-mono font-bold shrink-0 border border-vrc-neon/20">
                              {char}
                            </div>
                            <div>
                              <div className="text-[10px] font-bold text-vrc-neon uppercase tracking-tighter leading-none mb-1">{info.name}</div>
                              <div className="text-xs text-gray-400 leading-tight">{info.description}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-vrc-neon text-xs font-bold uppercase tracking-wider mb-2">추천 아바타 스타일</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{currentResult.avatarStyle}</p>
                  </div>

                  <div className="mt-auto pt-4 border-t border-white/5">
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <button
                        onClick={() => {
                          const shareText = `[VRCTI 결과]\n유형: ${resultCode}\n별명: ${currentResult.nickname}\n#VRCTI #VRChat`;
                          copyToClipboard(shareText);
                        }}
                        className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 p-3 rounded-lg text-sm border border-white/10 transition-colors"
                      >
                        <Copy size={16} /> 텍스트 복사
                      </button>
                      <button
                        onClick={() => {
                          const shareText = `[VRCTI 결과]\n유형: ${resultCode}\n별명: ${currentResult.nickname}\n#VRCTI #VRChat`;
                          window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`, '_blank');
                        }}
                        className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 p-3 rounded-lg text-sm border border-white/10 transition-colors"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                        트위터 공유
                      </button>
                    </div>

                    <button
                      onClick={reset}
                      className="flex items-center justify-center gap-2 w-full text-gray-500 hover:text-vrc-neon transition-colors text-sm"
                    >
                      <RotateCcw size={14} /> 다시 테스트하기
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsModalOpen(false)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="vrc-panel w-full max-w-lg relative z-10 max-h-[80vh] overflow-y-auto"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-vrc-neon font-black text-xl tracking-tighter">전체 지표 가이드</h3>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 text-gray-500 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-6">
                  {[
                    { pair: ['E', 'I'], title: '탐험 vs 안주' },
                    { pair: ['S', 'C'], title: '자아 vs 페르소나' },
                    { pair: ['G', 'D'], title: '현실 vs 몰입' },
                    { pair: ['A', 'U'], title: '적응 vs 개성' }
                  ].map((group, groupIdx) => (
                    <div key={groupIdx} className="space-y-2">
                      <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                        <div className="h-px flex-1 bg-white/5" />
                        {group.title}
                        <div className="h-px flex-1 bg-white/5" />
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {group.pair.map((char) => {
                          const info = indicatorDescriptions[char as Indicator];
                          return (
                            <div key={char} className="bg-white/5 p-4 rounded-2xl border border-white/5 flex gap-4 items-start">
                              <div className="w-10 h-10 rounded-xl bg-vrc-neon/10 flex items-center justify-center text-vrc-neon font-mono font-black text-xl shrink-0 border border-vrc-neon/20">
                                {char}
                              </div>
                              <div>
                                <div className="text-xs font-black text-vrc-neon uppercase tracking-wider mb-1">{info.name}</div>
                                <div className="text-sm text-gray-300 leading-snug break-keep">{info.description}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="vrc-button w-full mt-8"
                >
                  닫기
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <footer className="mt-8 text-[10px] text-gray-600 font-mono flex items-center gap-4">
          <span className="flex items-center gap-1"><User size={10} /> VRCTI v1.0.0</span>
          <a href="https://x.com/nupamo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-vrc-neon transition-colors">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            NUPAMO
          </a>
        </footer>
      </div>
    </div>
  );
}
