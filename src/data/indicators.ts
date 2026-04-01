export type Indicator = 'E' | 'I' | 'S' | 'C' | 'D' | 'G' | 'A' | 'U';
export type IndicatorName = {
  E: 'Explorer';
  I: 'Inside';
  S: 'Sync';
  C: 'Concept';
  D: 'Deep';
  G: 'Gamer';
  A: 'Adapt';
  U: 'Unique';
}

export interface IndicatorInfo {
  name: IndicatorName[Indicator];
  description: string;
}

export const indicatorDescriptions: Record<Indicator, IndicatorInfo> = {
  'E': { name: 'Explorer', description: '퍼블릭 월드와 새로운 만남을 즐기며 미지의 세계를 탐험합니다.' },
  'I': { name: 'Inside', description: '지인 위주의 프라이빗한 공간에서 안정적인 유대를 쌓는 것을 선호합니다.' },
  'S': { name: 'Sync', description: '현실의 자아를 아바타에 투영하여 진솔하게 소통합니다.' },
  'C': { name: 'Concept', description: '캐릭터의 설정과 페르소나를 만들어 가상 세계의 삶을 즐깁니다.' },
  'D': { name: 'Deep', description: '가상 세계의 감각과 감정에 깊게 몰입하며 물리적/정서적 교감을 중시합니다.' },
  'G': { name: 'Gamer', description: 'VRChat을 하나의 게임이나 발전된 랜덤 채팅으로 인지하고 즐깁니다.' },
  'A': { name: 'Addapt', description: '분위기를 잘 맞추며 내 취향보다는 트렌드에 맞는 아바타를 사용합니다.' },
  'U': { name: 'Unique', description: '나만의 아바타 제작, 사진 촬영 등의 창작 활동에 집중합니다.' },
};
