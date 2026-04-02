import { Indicator, Language } from "./indicators";

export interface Weight {
  indicator: Indicator;
  score: number;
}

export interface Question {
  id: number;
  text: Record<Language, string>;
  weights: Weight[];
}

export const questions: Question[] = [
  {
    text: {
      ko: "나는 친구가 있어도 퍼블릭에 가곤 한다.",
      en: "I often go to public worlds even when I have friends online.",
      ja: "フレンドがいてもパブリックワールドに行くことがある。"
    },
    weights: [{ indicator: 'E', score: 0.9 }, { indicator: 'G', score: 0.101 }]
  },
  {
    text: {
      ko: "나는 로그인한 친구가 없으면 VRChat에 접속하지 않거나 금방 끄는 편이다.",
      en: "If no friends are online, I don't join or I quit VRChat quickly.",
      ja: "ログインしているフレンドがいなければ、VRChatに接続しなかったり早めに切り上げたりする。"
    },
    weights: [{ indicator: 'I', score: 1.001 }, { indicator: 'D', score: 0.1 }]
  },
  {
    text: {
      ko: "Vket이 열리면 혼자 가지 않고 같이 갈 친구를 찾아본다.",
      en: "When Vket opens, I look for friends to visit with rather than going alone.",
      ja: "Vketが開催される時は、一人で行かずに一緒に行くフレンドを探す。"
    },
    weights: [{ indicator: 'I', score: 0.501 }, { indicator: 'D', score: 0.1 }]
  },
  {
    text: {
      ko: "자주 보지 않는 사람은 친구목록에 있을 필요가 없다고 생각한다.",
      en: "I don't think there's a need to keep people I don't see often on my friends list.",
      ja: "あまり会わない人はフレンドリストに入れる必要がないと思う。"
    },
    weights: [{ indicator: 'I', score: 1.001 }, { indicator: 'D', score: 1.0 }]
  },
  {
    text: {
      ko: "퍼블릭에서 발생하는 소란을 하나의 '구경거리'라고 생각하며 즐긴다.",
      en: "I see public world commotions as a 'spectacle' and enjoy watching them.",
      ja: "パブリックでの騒動を一つの「見物」だと思って楽しむ。"
    },
    weights: [{ indicator: 'E', score: 1.1 }, { indicator: 'G', score: 0.501 }]
  },
  {
    text: {
      ko: "나는 인게임에서도 내 실제 목소리와 플레이 성향을 그대로 사용하는 편이다.",
      en: "I tend to use my real voice and real personality in-game.",
      ja: "インゲームでも実際の自分の声やプレイスタイルをそのまま使う方だ。"
    },
    weights: [{ indicator: 'S', score: 1.0 }, { indicator: 'E', score: 0.2 }]
  },
  {
    text: {
      ko: "생긴게 달라도 가상 세계의 나도 결국 나라고 생각한다.",
      en: "Even if the appearance is different, I believe the virtual 'me' is still me.",
      ja: "外見が違っても、仮想世界の自分も結局は自分だと思う。"
    },
    weights: [{ indicator: 'S', score: 1.0 }, { indicator: 'G', score: 0.201 }]
  },
  {
    text: {
      ko: "서로의 현실 정보를 나누는게 불편하다.",
      en: "I feel uncomfortable sharing real-life information with others.",
      ja: "お互いの現実的な情報を共有することに抵抗がある。"
    },
    weights: [{ indicator: 'C', score: 1.101 }, { indicator: 'D', score: 0.3 }, { indicator: 'I', score: 0.101 }]
  },
  {
    text: {
      ko: "현실의 지인이 내 VRChat 플레이를 봐도 부끄럽지 않다.",
      en: "I wouldn't feel embarrassed if a real-life acquaintance saw me playing VRChat.",
      ja: "現実の知人にVRChatのプレイを見られても恥ずかしくない。"
    },
    weights: [{ indicator: 'S', score: 1.0 }, { indicator: 'G', score: 0.501 }]
  },
  {
    text: {
      ko: "아바타를 바꿀 때마다 그 아바타의 외형에 맞춰 말투나 행동을 조금씩 바꾼다.",
      en: "Whenever I change my avatar, I adjust my speech and behavior to match its appearance.",
      ja: "アバターを変えるたびに、その外見に合わせて言葉遣いや行動を少しずつ変える。"
    },
    weights: [{ indicator: 'C', score: 1.401 }, { indicator: 'D', score: 0.3 }]
  },
  {
    text: {
      ko: "VRChat에서 일어난 일 때문에 현실에 지장이 가는 일이 있다.",
      en: "Things that happen in VRChat sometimes affect my real life.",
      ja: "VRChatで起きたことのせいで、現実に支障をきたすことがある。"
    },
    weights: [{ indicator: 'D', score: 1.1 }, { indicator: 'S', score: 0.2 }]
  },
  {
    text: {
      ko: "누군가 나를 만지면 실제로 감각이 느껴지는 것 같다.",
      en: "If someone touches me, I feel as if I can actually sense it.",
      ja: "誰かに触れられると、実際に感覚があるように感じる。"
    },
    weights: [{ indicator: 'D', score: 1.2 }]
  },
  {
    text: {
      ko: "VR장비가 수리중인 상태라면 굳이 로그인하지는 않을 것 같다.",
      en: "If my VR equipment was being repaired, I probably wouldn't log in.",
      ja: "VR機器が修理中であれば、あえてログインはしないと思う。"
    },
    weights: [{ indicator: 'D', score: 1.01 }, { indicator: 'I', score: 0.301 }]
  },
  {
    text: {
      ko: "디스코드로 이미 좋아하는 친구들과 대화중이라면 굳이 VRChat에 접속하려는 생각은 들지 않는다.",
      en: "If I'm already talking to friends on Discord, I don't feel the need to join VRChat.",
      ja: "Discordですでに好きなフレンドと会話中なら、あえてVRChatに接続しようとは思わない。"
    },
    weights: [{ indicator: 'G', score: 1.101 }, { indicator: 'I', score: 0.301 }]
  },
  {
    text: {
      ko: "거울을 보며 떠들기보다는 월드 탐방을 더 좋아한다.",
      en: "I prefer exploring worlds over sitting in front of a mirror and chatting.",
      ja: "鏡を見ながらお喋りするより、ワールド探索の方が好きだ。"
    },
    weights: [{ indicator: 'G', score: 1.001 }, { indicator: 'E', score: 0.5 }]
  },
  {
    text: {
      ko: "유니티나 사진 보정 작업 등을 하다가 VRChat 접속을 포기할 때가 있다.",
      en: "I sometimes skip joining VRChat while working on Unity or photo editing.",
      ja: "Unityや写真加工の作業などをしていると、VRChatへの接続を諦めることがある。"
    },
    weights: [{ indicator: 'U', score: 1.401 }]
  },
  {
    text: {
      ko: "아바타는 내 취향보다 남의 눈이 더 중요하다.",
      en: "How others see my avatar is more important than my own preference.",
      ja: "アバターは自分の好みより他人の目が重要だ。"
    },
    weights: [{ indicator: 'A', score: 1.0 }, { indicator: 'C', score: 0.301 }]
  },
  {
    text: {
      ko: "새로운 아바타를 만들면 반드시 다른 사람의 의견을 물어본다.",
      en: "If I make a new avatar, I always ask for other people's opinions.",
      ja: "新しいアバターを作ったら、必ず他人の意見を聞く。"
    },
    weights: [{ indicator: 'A', score: 1.0 }]
  },
  {
    text: {
      ko: "새로운 기능을 배우는 것보다, 친구들과 아무 목적 없이 거울 앞에 앉아 떠드는 시간이 더 소중하다.",
      en: "Sitting and chatting with friends in front of a mirror is more precious than learning new features.",
      ja: "新しい機能を学ぶより、フレンドと何も目的なく鏡の前に座って喋る時間の方が大切だ。"
    },
    weights: [{ indicator: 'A', score: 0.7 }, { indicator: 'S', score: 0.1 }]
  },
  {
    text: {
      ko: "인게임에서 아바타 오류를 발견하면 VR을 쓰고 있어도 유니티를 킨다.",
      en: "If I find an avatar error in-game, I open Unity even while wearing VR.",
      ja: "インゲームでアバターのエラーを発見したら、VRを被っていてもUnityを起動する。"
    },
    weights: [{ indicator: 'U', score: 1.001 }, { indicator: 'G', score: 0.201 }]
  }
].sort(() => Math.random() - 0.5)
  .map((q, i) => ({ ...q, id: i }) as Question);
