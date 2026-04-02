export interface AvatarInfo {
  avatar: string;
  boothUrl: string;
}

export interface ResultInfo {
  nickname: string;
  description: string;
  avatar: string;
  avatarStyle: string;
  boothUrl?: string;
}

/**
 * 아바타 정보를 한곳에 모아 관리합니다.
 * 새로운 아바타를 추가하거나 기존 정보를 수정할 때 여기만 변경하면 됩니다.
 */
const avatars: Record<string, AvatarInfo> = {
  chiffon: {
    avatar: 'https://booth.pximg.net/61a3b2d7-b4b1-4f97-9e48-ffe959b26ae9/i/5354471/c42b543c-a334-4f18-bd26-a5cf23e2a61b_base_resized.jpg',
    boothUrl: 'https://komado.booth.pm/items/5354471'
  },
  manuka: {
    avatar: 'https://booth.pximg.net/8a7426aa-ba62-4ef0-9e7d-2c8ea96e7c9b/i/5058077/a18424fe-a56e-411a-9c47-27c56909593c_base_resized.jpg',
    boothUrl: 'https://jingo1016.booth.pm/items/5058077'
  },
  shinano: {
    avatar: 'https://booth.pximg.net/ed52788c-0b3b-4e38-9ded-1e5797daf0ef/i/6106863/07bd77df-a8ee-4244-8c4e-16cf7cb584bb_base_resized.jpg',
    boothUrl: 'https://ponderome.booth.pm/items/6106863'
  },
  mame: {
    avatar: 'https://booth.pximg.net/c80ffe79-d9d7-4481-bc64-40d80bcd71e6/i/4340548/cb43c1f7-bbdf-4115-942a-491c32b1de24_base_resized.jpg',
    boothUrl: 'https://m-u-m.booth.pm/items/4340548'
  },
  airi: {
    avatar: 'https://booth.pximg.net/f420c992-4225-4ce0-b751-3a4acdceaab6/i/6082686/81021dbd-ca83-4c3b-8868-230e780b63a3_base_resized.jpg',
    boothUrl: 'https://kyu-on.booth.pm/items/6082686'
  },
  lime: {
    avatar: 'https://booth.pximg.net/61a3b2d7-b4b1-4f97-9e48-ffe959b26ae9/i/4876459/73a1c9e3-825d-4045-bf14-e07392ad7afa_base_resized.jpg',
    boothUrl: 'https://komado.booth.pm/items/4876459'
  },
  lumina: {
    avatar: 'https://booth.pximg.net/87b70515-e32e-4a2e-bf41-317cf2c2177c/i/7502898/a2c93b99-de64-49f4-a76b-30ff769a5021_base_resized.jpg',
    boothUrl: 'https://vivi-vivi.booth.pm/items/7502898'
  },
  sio: {
    avatar: 'https://booth.pximg.net/817e9a9a-020c-4fac-8b21-96f80d6e25cb/i/5650156/95fc778d-3254-45ca-8a6e-2590dc30f87c_base_resized.jpg',
    boothUrl: 'https://chocolat-rice.booth.pm/items/5650156'
  },
  milfy: {
    avatar: 'https://booth.pximg.net/1ae5d9f5-29a4-4574-ab86-a316c22db92a/i/6571299/7bda05bb-f9d5-45a8-811a-b95ac555beb8_base_resized.jpg',
    boothUrl: 'https://nyasokutei.booth.pm/items/6571299'
  },
  kipfel: {
    avatar: 'https://booth.pximg.net/c80ffe79-d9d7-4481-bc64-40d80bcd71e6/i/5813187/9163df6c-cc4e-4a07-ace2-d22e3be58be8_base_resized.jpg',
    boothUrl: 'https://m-u-m.booth.pm/items/5813187'
  },
  milltina: {
    avatar: 'https://booth.pximg.net/01965a9e-bce5-4027-bc0e-0b8e7df43c6e/i/6538026/182b133f-1c86-4ae8-8536-5e00f63b86cf_base_resized.jpg',
    boothUrl: 'https://marumelo.booth.pm/items/6538026'
  },
  rurune: {
    avatar: 'https://booth.pximg.net/96d1d589-6879-4d30-8891-a2c6b8d64186/i/5957830/a4e0ae5b-7797-448b-80b1-e852c861e080_base_resized.jpg',
    boothUrl: 'https://lunalit.booth.pm/items/5957830'
  },
  mafuyu: {
    avatar: 'https://booth.pximg.net/1ae5d9f5-29a4-4574-ab86-a316c22db92a/i/5007531/dfdc2835-e4db-44f8-85ed-20bf607ad64e_base_resized.jpg',
    boothUrl: 'https://nyasokutei.booth.pm/items/5007531'
  },
  karin: {
    avatar: 'https://booth.pximg.net/61a3b2d7-b4b1-4f97-9e48-ffe959b26ae9/i/3470989/a70bc916-21f3-4b06-ae3a-eb302058a0b5_base_resized.jpg',
    boothUrl: 'https://komado.booth.pm/items/3470989'
  },
  chocolat: {
    avatar: 'https://booth.pximg.net/61a3b2d7-b4b1-4f97-9e48-ffe959b26ae9/i/6405390/6e6332b4-d56c-4d2f-8f23-328f702949c8_base_resized.jpg',
    boothUrl: 'https://komado.booth.pm/items/6405390'
  },
  maya: {
    avatar: 'https://booth.pximg.net/f420c992-4225-4ce0-b751-3a4acdceaab6/i/3390957/452e082f-67e8-480d-b697-9378977f41b0_base_resized.jpg',
    boothUrl: 'https://kyu-on.booth.pm/items/3390957'
  }
}

export const results: Record<string, ResultInfo> = {
  "ESDA": {
    nickname: "VRChat의 표준",
    description: "VRChat의 정석 같은 스타일입니다. 유행을 따르면서도 퍼블릭 월드에서 매너 있게 행동하며, 타인과 깊고 진솔한 관계를 맺는 것을 즐기는 타입입니다.",
    avatarStyle: "모두에게 사랑받는 트렌디하고 세련된 캐주얼 스타일.",
    ...avatars.manuka
  },
  "ESDU": {
    nickname: "서브컬처/패션파",
    description: "남들과는 다른 개성과 자신만의 스타일을 중시하는 타입입니다. 공용 월드에서도 독보적인 분위기를 풍기며, 서브컬처적인 감성을 아바타에 잘 녹여냅니다.",
    avatarStyle: "자유분방하고 스타일리시한 서브컬처 패션 스타일.",
    ...avatars.sio
  },
  "ESGA": {
    nickname: "이벤트 헌터",
    description: "새로운 월드 탐방이나 기업 이벤트, 커뮤니티 행사에 빠짐없이 나타나는 트렌디한 게이머입니다. 최신 소식에 밝고 활동적인 사교가 스타일입니다.",
    avatarStyle: "깔끔하고 세련된 데일리 룩이나 포멀한 제복 스타일.",
    ...avatars.shinano
  },
  "ESGU": {
    nickname: "스트리머/크리에이터 성향",
    description: "밝고 활기찬 개성을 뽐내며 게임적인 재미를 주변에 전파하는 타입입니다. 자신만의 창의적인 활동을 통해 사람들에게 즐거움을 주는 것을 선호합니다.",
    avatarStyle: "에너지 넘치고 활발한 분위기의 스포티하거나 팝한 스타일.",
    ...avatars.airi
  },
  "ECDA": {
    nickname: "카와이 무브의 정석",
    description: "귀여운 캐릭터성과 정서적인 교감을 동시에 추구하는 대중적인 스타일입니다. 상대방과의 친밀한 소통을 중요시하며 조화로운 분위기를 만듭니다.",
    avatarStyle: "부드럽고 포근한 느낌의 정석적인 카와이 스타일.",
    ...avatars.chiffon
  },
  "ECDU": {
    nickname: "판타지 과몰입",
    description: "자신만의 독특한 세계관과 확실한 캐릭터 설정을 가진 몰입형 유저입니다. 평범함을 거부하고 가상 세계 속 페르소나에 깊게 동화되는 것을 즐깁니다.",
    avatarStyle: "신비롭고 우아한 분위기의 판타지 또는 고딕 스타일.",
    ...avatars.milltina
  },
  "ECGA": {
    nickname: "라이트 유저",
    description: "복잡한 인간관계나 깊은 몰입보다는 캐릭터로서 가볍게 놀고 즐기는 것을 선호합니다. 부담 없는 소통과 월드 투어를 통해 힐링하는 타입입니다.",
    avatarStyle: "친근하고 편안한 느낌의 데일리 캐주얼 스타일.",
    ...avatars.lime
  },
  "ECGU": {
    nickname: "아방가르드",
    description: "남들이 잘 사용하지 않는 독특한 캐릭터나 아이템으로 자신만의 창작 세계를 표현합니다. 예술적이고 개성 넘치는 외형을 통해 존재감을 드러냅니다.",
    avatarStyle: "개성 넘치는 실루엣이나 예술적인 감각의 독특한 스타일.",
    ...avatars.lumina
  },
  "ISDA": {
    nickname: "클래식 은둔자",
    description: "초기부터 활동해온 숙련자로, 좁고 깊은 인간관계를 선호합니다. 오랜 시간 쌓아온 신뢰를 바탕으로 지인들과 조용히 시간을 보내는 것을 즐깁니다.",
    avatarStyle: "오랫동안 사랑받아온 클래식하고 단정한 스타일.",
    ...avatars.karin
  },
  "ISDU": {
    nickname: "수면VR/심연파",
    description: "조용히 지인 곁을 지키며 정서적으로 완전히 동화되는 것을 즐기는 타입입니다. 함께 있는 것만으로도 안정감을 느끼는 심연의 낭만가 스타일입니다.",
    avatarStyle: "차분하고 몽환적인 분위기의 다크톤 또는 수면용 스타일.",
    ...avatars.mafuyu
  },
  "ISGA": {
    nickname: "고인물",
    description: "지인들과 조용히 기술적인 대화를 나누거나 월드 제작, 아바타 기믹 구현에 몰입하는 타입입니다.",
    avatarStyle: "군더더기 없이 깔끔하고 기능적인 느낌의 세련된 스타일.",
    ...avatars.maya
  },
  "ISGU": {
    nickname: "프라이빗 장인",
    description: "타인의 시선보다는 본인이 가장 만족하는 성숙하고 세밀한 커스터마이징을 즐기는 타입입니다. 프라이빗 공간에서 자신만의 세계를 완성해 나갑니다.",
    avatarStyle: "디테일이 살아있는 고도로 개조된 커스텀 스타일.",
    ...avatars.milfy
  },
  "ICDA": {
    nickname: "나데나데(쓰담쓰담) 중독",
    description: "좁은 관계 안에서 귀여움을 주고받으며 정서적 충족감을 얻는 타입입니다. 지인들 사이의 애정 섞인 소통에서 큰 에너지를 얻습니다.",
    avatarStyle: "사랑스럽고 작고 소중한 느낌의 마스코트 스타일.",
    ...avatars.chocolat
  },
  "ICDU": {
    nickname: "특정 속성 매니아",
    description: "특정 직업이나 도구 등 아주 좁고 깊은 개인적 취향을 공유하는 사람들과 컨셉 플레이를 즐깁니다. 특정 컨셉에 대한 진심 어린 몰입을 중요시합니다.",
    avatarStyle: "작은 체구에 정교한 기믹이 포함된 테크니컬 스타일.",
    ...avatars.kipfel
  },
  "ICGA": {
    nickname: "마스코트 유저",
    description: "지인들 사이에서 귀여운 캐릭터로 존재하며 분위기를 밝게 띄우는 게임 플레이어입니다. 긍정적인 에너지를 전파하며 모임의 활력소 역할을 합니다.",
    avatarStyle: "활동하기 편하고 귀여움이 강조된 트렌디한 꼬맹이 스타일.",
    ...avatars.mame
  },
  "ICGU": {
    nickname: "개성파 꼬맹이",
    description: "작고 귀여운 캐릭터를 선호하면서도 남들과는 다른 디테일과 한 끗 차이의 개성을 챙기는 타입입니다. 작지만 확실한 존재감을 드러냅니다.",
    avatarStyle: "특정 컨셉이나 속성이 명확한 화려한 디테일의 스타일.",
    ...avatars.rurune
  },
  "DEFAULT": {
    nickname: "미스테리한 여행자",
    description: "당신은 아직 정의되지 않은 독특한 스타일의 유저입니다. 여러 지표가 균형을 이루고 있어 상황에 따라 다양한 모습을 보여주네요!",
    avatarStyle: "여러 스타일이 섞인 커스텀 아바타, 개성 있는 액세서리.",
    ...avatars.chiffon
  }
};
