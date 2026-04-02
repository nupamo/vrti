import { Indicator } from "./indicators";

export interface Question {
  id: number;
  indicator: Indicator;
  text: string;
}

export const questions: Question[] = [
  // E (Explorer) vs I (Inside)
  { indicator: 'E', text: "나는 친구가 있어도 퍼블릭에 가곤 한다." },
  { indicator: 'I', text: "나는 로그인한 친구가 없으면 VRChat에 접속하지 않거나 금방 끄는 편이다." },
  { indicator: 'I', text: "Vket이 열리면 혼자 가지 않고 같이 갈 친구를 찾아본다." },
  { indicator: 'I', text: "자주 보지 않는 사람은 친구목록에 있을 필요가 없다고 생각한다." },
  { indicator: 'E', text: "퍼블릭에서 발생하는 소란을 하나의 '구경거리'라고 생각하며 즐긴다." },

  // S (Sync) vs C (Concept)
  { indicator: 'S', text: "나는 인게임에서도 내 실제 목소리와 플레이 성향을 그대로 사용하는 편이다." },
  { indicator: 'S', text: "생긴게 달라도 가상 세계의 나도 결국 나라고 생각한다." },
  { indicator: 'C', text: "서로의 현실 정보를 나누는게 불편하다." },
  { indicator: 'S', text: "현실의 지인이 내 VRChat 플레이를 봐도 부끄럽지 않다." },
  { indicator: 'C', text: "아바타를 바꿀 때마다 그 아바타의 외형에 맞춰 말투나 행동을 조금씩 바꾼다." },

  // D (Deep) vs G (Gamer)
  { indicator: 'D', text: "VRChat에서 일어난 일 때문에 현실에 지장이 가는 일이 있다." },
  { indicator: 'D', text: "누군가 나를 만지면 실제로 감각이 느껴지는 것 같다." },
  { indicator: 'D', text: "VR장비가 수리중인 상태라면 굳이 로그인하지는 않을 것 같다." },
  { indicator: 'G', text: "디스코드로 이미 좋아하는 친구들과 대화중이라면 굳이 VRChat에 접속하려는 생각은 들지 않는다." },
  { indicator: 'G', text: "거울을 보며 떠들기보다는 월드 탐방을 더 좋아한다." },

  // A (Adapt) vs U (Unique)
  { indicator: 'U', text: "유니티나 사진 보정 작업 등을 하다가 VRChat 접속을 포기할 때가 있다." },
  { indicator: 'A', text: "아바타는 내 취향보다 남의 눈이 더 중요하다." },
  { indicator: 'A', text: "새로운 아바타를 만들면 반드시 다른 사람의 의견을 물어본다." },
  { indicator: 'A', text: "새로운 기능을 배우는 것보다, 친구들과 아무 목적 없이 거울 앞에 앉아 떠드는 시간이 더 소중하다." },
  { indicator: 'U', text: "인게임에서 아바타 오류를 발견하면 VR을 쓰고 있어도 유니티를 킨다." }
].sort(() => Math.random() - 0.5)
  .map((q, i) => ({ ...q, id: i }) as Question);
