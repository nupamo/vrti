export interface ResultInfo {
  nickname: string;
  description: string;
  avatarStyle: string;
}

export const results: Record<string, ResultInfo> = {
  "SDEF": {
    nickname: "퍼블릭의 아이돌",
    description: "현실의 활기찬 성격을 가상 세계에서도 그대로 보여주는 당신! 사람들과 어울리는 것을 좋아하며 감정 몰입도도 높아서 친구들에게 인기가 많아요.",
    avatarStyle: "밝고 귀여운 캐주얼 아바타, 감정 표현이 풍부한 표정 셰이프키."
  },
  "CDEF": {
    nickname: "낭만적인 롤플레이어",
    description: "철저하게 캐릭터에 몰입하지만, 사람들과 따뜻한 교류를 즐기는 로맨티스트입니다. 가상 세계에서의 또 다른 삶을 진심으로 즐기고 계시네요.",
    avatarStyle: "컨셉이 확실한 판타지풍 혹은 제복 스타일, 소품을 활용한 연출."
  },
  "SGPF": {
    nickname: "잔잔한 힐링 관조자",
    description: "현실의 나로 접속하지만 조용히 지인들과 시간을 보내는 것을 선호합니다. 화려한 기믹보다는 소박한 대화와 안정감을 중시해요.",
    avatarStyle: "편안한 잠옷이나 일상복 스타일, 담백한 디자인."
  },
  "SxPT": {
    nickname: "심해형 유니티 장인",
    description: "조용한 프라이빗 월드에서 묵묵히 코드를 짜고 유니티를 만지는 진정한 기술자! 때로는 몰입하고 때로는 관조하며 자신만의 세계를 구축합니다.",
    avatarStyle: "고도의 기믹이 들어간 테크니컬 아바타, 파티클 시스템이 화려한 디자인."
  },
  "DEFAULT": {
    nickname: "미스테리한 여행자",
    description: "당신은 아직 정의되지 않은 독특한 스타일의 유저입니다. 여러 지표가 균형을 이루고 있어 상황에 따라 다양한 모습을 보여주네요!",
    avatarStyle: "여러 스타일이 섞인 커스텀 아바타, 개성 있는 액세서리."
  }
};
