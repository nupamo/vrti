import { Language } from "./indicators";

export interface AvatarInfo {
  avatar: string;
  boothUrl: string;
}

export interface ResultInfo {
  nickname: Record<Language, string>;
  description: Record<Language, string>;
  avatar: string;
  avatarStyle: Record<Language, string>;
  boothUrl?: string;
}

const avatars: Record<string, AvatarInfo> = {
  chiffon: {
    avatar: 'https://booth.pximg.net/61a3b2d7-b4b1-4f97-9e48-ffe959b26ae9/i/5354471/c42b543c-a334-4f18-bd26-a5cf23e2a61b_base_resized.jpg',
    boothUrl: '5354471'
  },
  manuka: {
    avatar: 'https://booth.pximg.net/8a7426aa-ba62-4ef0-9e7d-2c8ea96e7c9b/i/5058077/a18424fe-a56e-411a-9c47-27c56909593c_base_resized.jpg',
    boothUrl: '5058077'
  },
  shinano: {
    avatar: 'https://booth.pximg.net/ed52788c-0b3b-4e38-9ded-1e5797daf0ef/i/6106863/07bd77df-a8ee-4244-8c4e-16cf7cb584bb_base_resized.jpg',
    boothUrl: '6106863'
  },
  mame: {
    avatar: 'https://booth.pximg.net/c80ffe79-d9d7-4481-bc64-40d80bcd71e6/i/4340548/cb43c1f7-bbdf-4115-942a-491c32b1de24_base_resized.jpg',
    boothUrl: '4340548'
  },
  airi: {
    avatar: 'https://booth.pximg.net/f420c992-4225-4ce0-b751-3a4acdceaab6/i/6082686/81021dbd-ca83-4c3b-8868-230e780b63a3_base_resized.jpg',
    boothUrl: '6082686'
  },
  lime: {
    avatar: 'https://booth.pximg.net/61a3b2d7-b4b1-4f97-9e48-ffe959b26ae9/i/4876459/73a1c9e3-825d-4045-bf14-e07392ad7afa_base_resized.jpg',
    boothUrl: '4876459'
  },
  lumina: {
    avatar: 'https://booth.pximg.net/87b70515-e32e-4a2e-bf41-317cf2c2177c/i/7502898/a2c93b99-de64-49f4-a76b-30ff769a5021_base_resized.jpg',
    boothUrl: '7502898'
  },
  sio: {
    avatar: 'https://booth.pximg.net/817e9a9a-020c-4fac-8b21-96f80d6e25cb/i/5650156/95fc778d-3254-45ca-8a6e-2590dc30f87c_base_resized.jpg',
    boothUrl: '5650156'
  },
  milfy: {
    avatar: 'https://booth.pximg.net/1ae5d9f5-29a4-4574-ab86-a316c22db92a/i/6571299/7bda05bb-f9d5-45a8-811a-b95ac555beb8_base_resized.jpg',
    boothUrl: '6571299'
  },
  kipfel: {
    avatar: 'https://booth.pximg.net/c80ffe79-d9d7-4481-bc64-40d80bcd71e6/i/5813187/9163df6c-cc4e-4a07-ace2-d22e3be58be8_base_resized.jpg',
    boothUrl: '5813187'
  },
  milltina: {
    avatar: 'https://booth.pximg.net/01965a9e-bce5-4027-bc0e-0b8e7df43c6e/i/6538026/182b133f-1c86-4ae8-8536-5e00f63b86cf_base_resized.jpg',
    boothUrl: '6538026'
  },
  nemesis: {
    avatar: 'https://booth.pximg.net/361b24ef-b14b-4330-aa22-2725a5727286/i/5986971/d1261463-3709-4d8e-9ec7-60f09ba9b07b_base_resized.jpg',
    boothUrl: '5986971'
  },
  mafuyu: {
    avatar: 'https://booth.pximg.net/1ae5d9f5-29a4-4574-ab86-a316c22db92a/i/5007531/dfdc2835-e4db-44f8-85ed-20bf607ad64e_base_resized.jpg',
    boothUrl: '5007531'
  },
  karin: {
    avatar: 'https://booth.pximg.net/61a3b2d7-b4b1-4f97-9e48-ffe959b26ae9/i/3470989/a70bc916-21f3-4b06-ae3a-eb302058a0b5_base_resized.jpg',
    boothUrl: '3470989'
  },
  chocolat: {
    avatar: 'https://booth.pximg.net/61a3b2d7-b4b1-4f97-9e48-ffe959b26ae9/i/6405390/6e6332b4-d56c-4d2f-8f23-328f702949c8_base_resized.jpg',
    boothUrl: '6405390'
  },
  maya: {
    avatar: 'https://booth.pximg.net/f420c992-4225-4ce0-b751-3a4acdceaab6/i/3390957/452e082f-67e8-480d-b697-9378977f41b0_base_resized.jpg',
    boothUrl: '3390957'
  }
}

export const results: Record<string, ResultInfo> = {
  "ESDA": {
    nickname: { ko: "VRChat의 표준", en: "VRChat Standard", ja: "VRChatの標準" },
    description: {
      ko: "VRChat의 정석 같은 스타일입니다. 유행을 따르면서도 퍼블릭 월드에서 매너 있게 행동하며, 타인과 깊고 진솔한 관계를 맺는 것을 즐기는 타입입니다.",
      en: "The textbook VRChat style. Follows trends, remains polite in public worlds, and enjoys building deep, sincere relationships.",
      ja: "VRChatの王道スタイル。流行を追いながらも、パブリックでのマナーが良く、他者と深く誠実な関係を築くことを好むタイプ。"
    },
    avatarStyle: { ko: "모두에게 사랑받는 트렌디하고 세련된 캐주얼 스타일.", en: "Trendy and sophisticated casual style loved by everyone.", ja: "誰からも愛されるトレンド感のある洗練されたカジュアルスタイル。" },
    ...avatars.manuka
  },
  "ESDU": {
    nickname: { ko: "서브컬처/패션파", en: "Subculture / Fashionista", ja: "サブカル/ファッション派" },
    description: {
      ko: "남들과는 다른 개성과 자신만의 스타일을 중시하는 타입입니다. 공용 월드에서도 독보적인 분위기를 풍기며, 서브컬처적인 감성을 아바타에 잘 녹여냅니다.",
      en: "Values unique personality and personal style. Stands out even in public worlds, reflecting subculture vibes in their avatar.",
      ja: "他人とは違う個性と独自のスタイルを重視するタイプ。パブリックワールドでも独特な雰囲気を漂わせ、サブカル的な感性をアバターにうまく落とし込む。"
    },
    avatarStyle: { ko: "자유분방하고 스타일리시한 서브컬처 패션 스타일.", en: "Free-spirited and stylish subculture fashion style.", ja: "自由奔放でスタイリッシュなサブカルファッションスタイル。" },
    ...avatars.sio
  },
  "ESGA": {
    nickname: { ko: "이벤트 헌터", en: "Event Hunter", ja: "イベントハンター" },
    description: {
      ko: "새로운 월드 탐방이나 기업 이벤트, 커뮤니티 행사에 빠짐없이 나타나는 트렌디한 게이머입니다. 최신 소식에 밝고 활동적인 사교가 스타일입니다.",
      en: "A trendy gamer who never misses new worlds, corporate events, or community gatherings. A socially active person always up-to-date with news.",
      ja: "新しいワールド探索や企業イベント、コミュニティ活動に欠かさず現れるトレンドに敏感なゲーマー。最新情報に詳しく、活動的なソーシャライザー。"
    },
    avatarStyle: { ko: "깔끔하고 세련된 데일리 룩이나 포멀한 제복 스타일.", en: "Clean and sophisticated daily look or formal uniform style.", ja: "清潔感のある洗練されたデイリールックやフォーマルな制服スタイル。" },
    ...avatars.shinano
  },
  "ESGU": {
    nickname: { ko: "스트리머/크리에이터 성향", en: "Streamer / Creator Type", ja: "配信者/クリエイター気質" },
    description: {
      ko: "밝고 활기찬 개성을 뽐내며 게임적인 재미를 주변에 전파하는 타입입니다. 자신만의 창의적인 활동을 통해 사람들에게 즐거움을 주는 것을 선호합니다.",
      en: "Radiates bright and energetic personality, spreading game-like fun to those around them. Prefers making others happy through creative work.",
      ja: "明るく活発な個性を放ち、ゲーム的な楽しさを周囲に広めるタイプ。自分自身のクリエイティブな活動を通じて、他人に喜びを与えることを好む。"
    },
    avatarStyle: { ko: "에너지 넘치고 활발한 분위기의 섹시한 스타일.", en: "Energetic, active, and sexy vibe style.", ja: "エネルギッシュで活発な雰囲気のセクシーなスタイル。" },
    ...avatars.airi
  },
  "ECDA": {
    nickname: { ko: "카와이 무브의 정석", en: "Textbook Kawaii-move", ja: "カワイイムーブの正石" },
    description: {
      ko: "귀여운 캐릭터성과 정서적인 교감을 동시에 추구하는 대중적인 스타일입니다. 상대방과의 친밀한 소통을 중요시하며 조화로운 분위기를 만듭니다.",
      en: "A popular style seeking both cute character appeal and emotional bonding. Values intimate communication and creates a harmonious atmosphere.",
      ja: "可愛いキャラクター性と情緒的な交流を同時に追求する人気スタイル。相手との親密なコミュニケーションを重視し、調和のとれた雰囲気を作る。"
    },
    avatarStyle: { ko: "부드럽고 포근한 느낌의 정석적인 카와이 스타일.", en: "Soft and cozy classic kawaii style.", ja: "柔らかく包み込むような定番のカワイイスタイル。" },
    ...avatars.chiffon
  },
  "ECDU": {
    nickname: { ko: "판타지 과몰입", en: "Fantasy Immersion", ja: "ファンタジー過没入" },
    description: {
      ko: "자신만의 독특한 세계관과 확실한 캐릭터 설정을 가진 몰입형 유저입니다. 평범함을 거부하고 가상 세계 속 페르소나에 깊게 동화되는 것을 즐깁니다.",
      en: "Focused on an immersive world and clear character setting. Rejects the ordinary and enjoys deeply identifying with their virtual persona.",
      ja: "独自のファンタジーな世界観と確固たるキャラクター設定を持つ没入型ユーザー。凡庸さを拒み、仮想世界でのペルソナに深く同化することを楽しむ。"
    },
    avatarStyle: { ko: "신비롭고 우아한 분위기의 판타지 또는 고딕 스타일.", en: "Mysterious and elegant fantasy or gothic style.", ja: "神秘的でエレガントな雰囲気のファンタジー、またはゴシックスタイル。" },
    ...avatars.milltina
  },
  "ECGA": {
    nickname: { ko: "라이트 유저", en: "Light User", ja: "ライトユーザー" },
    description: {
      ko: "복잡한 인간관계나 깊은 몰입보다는 캐릭터로서 가볍게 놀고 즐기는 것을 선호합니다. 부담 없는 소통과 월드 투어를 통해 힐링하는 타입입니다.",
      en: "Prefers playing lightly as a character rather than complex relationships or deep immersion. Heals through casual interaction and world tours.",
      ja: "複雑な人間関係や深い没入よりは、公式的なキャラクターとして軽く遊ぶことを好む。負担のない交流やワールド巡りを通じて癒しを求めるタイプ。"
    },
    avatarStyle: { ko: "친근하고 편안한 느낌의 데일리 캐주얼 스타일.", en: "Friendly and comfortable daily casual style.", ja: "親しみやすくリラックスしたデイリーカジュアルスタイル。" },
    ...avatars.lime
  },
  "ECGU": {
    nickname: { ko: "아방가르드", en: "Avant-garde", ja: "アヴァンギャルド" },
    description: {
      ko: "남들이 잘 사용하지 않는 독특한 캐릭터나 아이템으로 자신만의 창작 세계를 표현합니다. 예술적이고 개성 넘치는 외형을 통해 존재감을 드러냅니다.",
      en: "Expresses their creative world using unique characters or items others rarely use. Stands out through artistic and personality-rich looks.",
      ja: "他人が使わないような独特なキャラクターやアイテムで、自分自身の創作世界を表現する。芸術的で個性が際立つ外見を通じて存在感を示す。"
    },
    avatarStyle: { ko: "개성 넘치는 실루엣이나 예술적인 감각의 독특한 스타일.", en: "Unique silhouettes or artistically sensed distinctive style.", ja: "個性的なシルエットや芸術的なセンスが光る独特なスタイル。" },
    ...avatars.lumina
  },
  "ISDA": {
    nickname: { ko: "클래식 은둔자", en: "Classic Hermit", ja: "クラシック隠遁者" },
    description: {
      ko: "초기부터 활동해온 숙련자로, 좁고 깊은 인간관계를 선호합니다. 오랜 시간 쌓아온 신뢰를 바탕으로 지인들과 조용히 시간을 보내는 것을 즐깁니다.",
      en: "An experienced user from the early days, preferring narrow and deep relationships. Enjoys quiet time with friends based on long-term trust.",
      ja: "初期から活動している熟練ユーザーで、狭く深い人間関係を好む。長年築いてきた信頼に基づき、知人と静かに過ごすことを楽しむ。"
    },
    avatarStyle: { ko: "오랫동안 사랑받아온 클래식하고 단정한 스타일.", en: "Long-loved classic and neat style.", ja: "長く愛されてきた、クラシックで清楚なスタイル。" },
    ...avatars.karin
  },
  "ISDU": {
    nickname: { ko: "수면VR/심연파", en: "Sleep VR / Abyss Walker", ja: "睡眠VR/深淵派" },
    description: {
      ko: "조용히 지인 곁을 지키며 정서적으로 완전히 동화되는 것을 즐기는 타입입니다. 함께 있는 것만으로도 안정감을 느끼는 심연의 낭만가 스타일입니다.",
      en: "Enjoys quiet presence with friends and total emotional synchronization. A romantic explorer of the 'Abyss' who feels peace just being together.",
      ja: "静かに知人の傍に寄り添い、情緒的に完全に同化することを楽しむタイプ。一緒にいるだけで安心感を得る、深淵のロマンチスト。"
    },
    avatarStyle: { ko: "차분하고 몽환적인 분위기의 다크톤 또는 수면용 스타일.", en: "Calm and dreamy dark-tone or sleep-optimized style.", ja: "落ち着いた幻想的な雰囲気のダークトーン、または睡眠用スタイル。" },
    ...avatars.mafuyu
  },
  "ISGA": {
    nickname: { ko: "고인물", en: "Veteran / Expert", ja: "古参（ゴーレム）" },
    description: {
      ko: "지인들과 조용히 기술적인 대화를 나누거나 월드 제작, 아바타 기믹 구현에 몰입하는 타입입니다.",
      en: "Focuses on technical discussions with close friends or immersing in world-building and avatar gimmick implementation.",
      ja: "知人と静かに技術的な会話を交わしたり、ワールド制作やアバターギミックの実装に没頭したりするタイプ。"
    },
    avatarStyle: { ko: "절제된 디자인에 정교한 개조 기믹이 숨겨진 세련된 스타일.", en: "Sophisticated style with discrete design and intricate modification gimmicks.", ja: "控えめなデザインの中に精巧な改造ギ믹が隠された洗練されたスタイル。" },
    ...avatars.maya
  },
  "ISGU": {
    nickname: { ko: "프라이빗 장인", en: "Private Artisan", ja: "プライベート職人" },
    description: {
      ko: "타인의 시선보다는 본인이 가장 만족하는 성숙하고 세밀한 커스터마이징을 즐기는 타입입니다. 프라이빗 공간에서 자신만의 세계를 완성해 나갑니다.",
      en: "Enjoys mature and detailed customization for personal satisfaction rather than others' gaze. Completes their own world in private spaces.",
      ja: "他人の目よりは、自分自身が最も満足する成熟した繊細なカスタマイズを楽しむタイプ。プライベート空間で自分だけの世界を完成させる。"
    },
    avatarStyle: { ko: "디테일이 살아있는 고도로 개조된 커스텀 스타일.", en: "Highly modified custom style with vivid details.", ja: "ディテールにこだわった、高度に改造されたカスタムスタイル。" },
    ...avatars.milfy
  },
  "ICDA": {
    nickname: { ko: "나데나데(쓰담쓰담) 중독", en: "Petting Addict", ja: "ナデナデ中毒" },
    description: {
      ko: "좁은 관계 안에서 귀여움을 주고받으며 정서적 충족감을 얻는 타입입니다. 지인들 사이의 애정 섞인 소통에서 큰 에너지를 얻습니다.",
      en: "Gains emotional fulfillment by sharing cuteness within narrow relationships. Derives great energy from affectionate interactions with close friends.",
      ja: "狭い関係性の中で可愛さをやり取りし、情緒的な満足感を得るタイプ。親しい間柄での愛情深いコミュニケーションから大きな力を得る。"
    },
    avatarStyle: { ko: "사랑스럽고 작고 소중한 느낌의 마스코트 스타일.", en: "Lovely, small, and precious mascot style.", ja: "愛らしく小さくて大切なマ스코ット風スタイル。" },
    ...avatars.chocolat
  },
  "ICDU": {
    nickname: { ko: "특정 속성 매니아", en: "Attribute Enthusiast", ja: "特定属性マニア" },
    description: {
      ko: "특정 직업이나 도구 등 아주 좁고 깊은 개인적 취향을 공유하는 사람들과 컨셉 플레이를 즐깁니다. 특정 컨셉에 대한 진심 어린 몰입을 중요시합니다.",
      en: "Enjoys concept play with people who share very narrow and deep personal interests like specific jobs or tools. Values sincere immersion in concepts.",
      ja: "特定の職業や道具など、極めて狭く深い個人的な好みを共有する人たちとコンセプトプレイを楽しむ。特定のコンセプトに対する真心のこもった没入を重視する。"
    },
    avatarStyle: { ko: "작은 체구에 정교한 기믹이 포함된 테크니컬 스타일.", en: "Technical style with small stature and intricate gimmicks.", ja: "小柄な体に精巧なギミックが含まれたテクニカルなスタイル。" },
    ...avatars.kipfel
  },
  "ICGA": {
    nickname: { ko: "마스코트 유저", en: "Mascot User", ja: "マスコットユーザー" },
    description: {
      ko: "지인들 사이에서 귀여운 캐릭터로 존재하며 분위기를 밝게 띄우는 게임 플레이어입니다. 긍정적인 에너지를 전파하며 모임의 활력소 역할을 합니다.",
      en: "Plays as a cute character among friends, brightening the atmosphere. Spreads positive energy and acts as the life of the party.",
      ja: "知人の間で可愛いキャラクターとして存在し、その場の雰囲気を明るくする盛り上げ役。ポジティブなエネルギーを届け、集会の活力となる。"
    },
    avatarStyle: { ko: "활동하기 편하고 귀여움이 강조된 트렌디한 꼬맹이 스타일.", en: "Active and trendy child-like style with an emphasis on cuteness.", ja: "動きやすく可愛さが強調された、トレンド感のある小童スタイル。" },
    ...avatars.mame
  },
  "ICGU": {
    nickname: { ko: "개성파 꼬맹이", en: "Eccentric Child", ja: "個性派おちびさん" },
    description: {
      ko: "작고 귀여운 캐릭터를 선호하면서도 남들과는 다른 디테일과 한 끗 차이의 개성을 챙기는 타입입니다. 작지만 확실한 존재감을 드러냅니다.",
      en: "Prefers small and cute characters but pays attention to unique details and subtle individuality. Shows a small but definite presence.",
      ja: "小さくて可愛いキャラクターを好みながらも、他人とは違うディテールや一味違う個性を大切にするタイプ。小柄ながらも確かな存在感を示す。"
    },
    avatarStyle: { ko: "특정 컨셉이나 속성이 명확한 화려한 디테일의 스타일.", en: "Flashy detail style with clear specific concepts or attributes.", ja: "特定のコンセプトや属性が明確な、華やかなディテールのスタイル。" },
    ...avatars.nemesis
  },
  "DEFAULT": {
    nickname: { ko: "미스테리한 여행자", en: "Mysterious Traveler", ja: "ミステリアスな旅人" },
    description: {
      ko: "당신은 아직 정의되지 않은 독특한 스타일의 유저입니다. 여러 지표가 균형을 이루고 있어 상황에 따라 다양한 모습을 보여주네요!",
      en: "You are a traveler with a style not yet defined. Various indicators are balanced, showing different faces depending on the situation!",
      ja: "あなたはまだ定義されていない、独特なスタイルのユーザー。様々な指標が均衡を保っており、状況に応じて多様な姿を見せてくれます。"
    },
    avatarStyle: { ko: "여러 스타일이 섞인 커스텀 아바타, 개성 있는 액세서리.", en: "Mixed-style custom avatar, unique accessories.", ja: "様々なスタイルが混ざったカスタムアバター、個性的なアクセサリー。" },
    ...avatars.chiffon
  }
};
