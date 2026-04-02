export type Language = 'ko' | 'en' | 'ja';

export type Indicator = 'E' | 'I' | 'S' | 'C' | 'D' | 'G' | 'A' | 'U' | 'x';

export type IndicatorName = {
  [key in Language]: {
    E: string;
    I: string;
    S: string;
    C: string;
    G: string;
    D: string;
    A: string;
    U: string;
    x: string;
  }
}

export interface IndicatorInfo {
  name: string;
  description: string;
}

export const indicatorDescriptions: Record<Language, Record<Indicator, IndicatorInfo>> = {
  ko: {
    'E': { name: 'Explorer', description: '퍼블릭 월드와 새로운 만남을 즐기며 미지의 세계를 탐험합니다.' },
    'I': { name: 'Inside', description: '지인 위주의 프라이빗한 공간에서 안정적인 유대를 쌓는 것을 선호합니다.' },
    'S': { name: 'Sync', description: '현실의 자아를 아바타에 투영하여 진솔하게 소통합니다.' },
    'C': { name: 'Concept', description: '캐릭터의 설정과 페르소나를 만들어 가상 세계의 삶을 즐깁니다.' },
    'G': { name: 'Gamer', description: 'VRChat을 가상의 몰입 공간보다는 현실의 연장선이나 하나의 게임 플랫폼으로 인식하고 즐깁니다.' },
    'D': { name: 'Deep', description: '가상 세계의 감각과 감정에 깊게 몰입하며 물리적/정서적 교감을 중시합니다.' },
    'A': { name: 'Adapt', description: '분위기를 잘 맞추며 내 취향보다는 트렌드에 맞는 아바타를 사용합니다.' },
    'U': { name: 'Unique', description: '나만의 아바타 제작, 사진 촬영 등의 창작 활동에 집중합니다.' },
    'x': { name: 'Neutral', description: '해당 지표에서 중립적인 성향을 보이며 상황에 따라 유연하게 대처합니다.' }
  },
  en: {
    'E': { name: 'Explorer', description: 'Enjoys public worlds and new encounters, exploring the unknown.' },
    'I': { name: 'Inside', description: 'Prefers private spaces with friends, focusing on building stable bonds.' },
    'S': { name: 'Sync', description: 'Projects their real self onto their avatar for authentic communication.' },
    'C': { name: 'Concept', description: 'Enjoys virtual life by creating character settings and personas.' },
    'G': { name: 'Gamer', description: 'Views VRChat as an extension of reality or a gaming platform rather than an immersive space.' },
    'D': { name: 'Deep', description: 'Deeply immersed in the senses and emotions of the virtual world, valuing physical/emotional interaction.' },
    'A': { name: 'Adapt', description: 'Adapts well to the atmosphere and uses trendy avatars rather than personal preferences.' },
    'U': { name: 'Unique', description: 'Focuses on creative activities such as making avatars or taking photos.' },
    'x': { name: 'Neutral', description: 'Shows neutral tendencies and flexibly adapts to situations.' }
  },
  ja: {
    'E': { name: 'Explorer', description: 'パブリックワールドや新しい出会いを楽しみ、未知の世界を探索します。' },
    'I': { name: 'Inside', description: '知人中心のプライベートな空間で、安定した絆を築くことを好みます。' },
    'S': { name: 'Sync', description: '現実の自分をアバターに投影し、誠実にコミュニケーションを取ります。' },
    'C': { name: 'Concept', description: 'キャラクターの設定やペルソナを作り、仮想世界での生活を楽しみます。' },
    'G': { name: 'Gamer', description: 'VRChatを仮想の没入空間というより、現実の延長や一つのゲームプラットフォームとして認識し楽しみます。' },
    'D': { name: 'Deep', description: '仮想世界の感覚や感情に深く没入し、物理的・情緒的な交流を重視します。' },
    'A': { name: 'Adapt', description: '空気を読み、自分の好みよりはトレンドに合ったアバターを使用します。' },
    'U': { name: 'Unique', description: '自分だけのアバター制作、写真撮影などの創作活動に集中します。' },
    'x': { name: 'Neutral', description: '該当の指標において中立的な傾向を示し、状況に応じて柔軟に対処します。' }
  }
};
