import { Indicator } from "./indicators";

export interface Weight {
  indicator: Indicator;
  score: number; // 긍정 답변(O) 시 더해질 점수 (부정 답변 시에는 이 점수가 빠지거나 0이 됨)
}

export interface Question {
  id: number;
  text: string;
  weights: Weight[]; // 여러 지표에 가중치를 줄 수 있도록 변경
}

/**
 * [수학적으로 동점을 방지하는 가중치 설계]
 * E, S, D, A (전반 지표): 0.1 단위로 끝남 (예: 1.0, 0.5)
 * I, C, G, U (후반 지표): 0.001 단위를 추가 (예: 1.001, 0.501)
 * 두 그룹의 점수 합계는 소수점 세 번째 자리의 유무로 인해 절대 같아질 수 없습니다.
 */
export const questions: Question[] = [
  {
    text: "나는 친구가 있어도 퍼블릭에 가곤 한다.",
    weights: [{ indicator: 'E', score: 0.9 }, { indicator: 'G', score: 0.101 }]
  },
  {
    text: "나는 로그인한 친구가 없으면 VRChat에 접속하지 않거나 금방 끄는 편이다.",
    weights: [{ indicator: 'I', score: 1.001 }, { indicator: 'D', score: 0.1 }]
  },
  {
    text: "Vket이 열리면 혼자 가지 않고 같이 갈 친구를 찾아본다.",
    weights: [{ indicator: 'I', score: 0.501 }, { indicator: 'D', score: 0.1 }]
  },
  {
    text: "자주 보지 않는 사람은 친구목록에 있을 필요가 없다고 생각한다.",
    weights: [{ indicator: 'I', score: 1.001 }, { indicator: 'D', score: 1.0 }]
  },
  {
    text: "퍼블릭에서 발생하는 소란을 하나의 '구경거리'라고 생각하며 즐긴다.",
    weights: [{ indicator: 'E', score: 1.1 }, { indicator: 'G', score: 0.501 }]
  },
  {
    text: "나는 인게임에서도 내 실제 목소리와 플레이 성향을 그대로 사용하는 편이다.",
    weights: [{ indicator: 'S', score: 1.0 }, { indicator: 'E', score: 0.2 }]
  },
  {
    text: "생긴게 달라도 가상 세계의 나도 결국 나라고 생각한다.",
    weights: [{ indicator: 'S', score: 1.0 }, { indicator: 'G', score: 0.201 }]
  },
  {
    text: "서로의 현실 정보를 나누는게 불편하다.",
    weights: [{ indicator: 'C', score: 1.101 }, { indicator: 'D', score: 0.3 }, { indicator: 'I', score: 0.101 }]
  },
  {
    text: "현실의 지인이 내 VRChat 플레이를 봐도 부끄럽지 않다.",
    weights: [{ indicator: 'S', score: 1.0 }, { indicator: 'G', score: 0.501 }]
  },
  {
    text: "아바타를 바꿀 때마다 그 아바타의 외형에 맞춰 말투나 행동을 조금씩 바꾼다.",
    weights: [{ indicator: 'C', score: 1.401 }, { indicator: 'D', score: 0.3 }]
  },
  {
    text: "VRChat에서 일어난 일 때문에 현실에 지장이 가는 일이 있다.",
    weights: [{ indicator: 'D', score: 1.1 }, { indicator: 'S', score: 0.2 }]
  },
  {
    text: "누군가 나를 만지면 실제로 감각이 느껴지는 것 같다.",
    weights: [{ indicator: 'D', score: 1.2 }]
  },
  {
    text: "VR장비가 수리중인 상태라면 굳이 로그인하지는 않을 것 같다.",
    weights: [{ indicator: 'D', score: 0.9 }, { indicator: 'I', score: 0.301 }]
  },
  {
    text: "디스코드로 이미 좋아하는 친구들과 대화중이라면 굳이 VRChat에 접속하려는 생각은 들지 않는다.",
    weights: [{ indicator: 'G', score: 1.101 }, { indicator: 'I', score: 0.301 }]
  },
  {
    text: "거울을 보며 떠들기보다는 월드 탐방을 더 좋아한다.",
    weights: [{ indicator: 'G', score: 1.301 }, { indicator: 'E', score: 0.5 }]
  },
  {
    text: "유니티나 사진 보정 작업 등을 하다가 VRChat 접속을 포기할 때가 있다.",
    weights: [{ indicator: 'U', score: 1.401 }]
  },
  {
    text: "아바타는 내 취향보다 남의 눈이 더 중요하다.",
    weights: [{ indicator: 'A', score: 1.0 }, { indicator: 'C', score: 0.301 }]
  },
  {
    text: "새로운 아바타를 만들면 반드시 다른 사람의 의견을 물어본다.",
    weights: [{ indicator: 'A', score: 1.0 }]
  },
  {
    text: "새로운 기능을 배우는 것보다, 친구들과 아무 목적 없이 거울 앞에 앉아 떠드는 시간이 더 소중하다.",
    weights: [{ indicator: 'A', score: 0.7 }, { indicator: 'S', score: 0.1 }]
  },
  {
    text: "인게임에서 아바타 오류를 발견하면 VR을 쓰고 있어도 유니티를 킨다.",
    weights: [{ indicator: 'U', score: 1.001 }, { indicator: 'G', score: 0.201 }]
  }
].sort(() => Math.random() - 0.5)
  .map((q, i) => ({ ...q, id: i }) as Question);
