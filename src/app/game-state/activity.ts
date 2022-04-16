import { CharacterAttribute } from "./character";

export enum ActivityRewardType {
  Attribute
}

export interface ActivityReward {
  type: ActivityRewardType;
  attribute: CharacterAttribute; // TODO: This interface needs to be fixed to be more flexible
  amount: number;
}

export enum ActivityCostType {
  Placeholder
}

export interface ActivityCost {
  type: ActivityCostType;
  amount: number;
}

export interface Activity {
  name: string;
  timeCost: number;
  costs: ActivityCost[];
  rewards: ActivityReward[];
}