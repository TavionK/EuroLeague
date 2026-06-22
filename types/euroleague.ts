// Player Team Type
export interface PlayerTeam {
  code: string;
  tvCodes: string;
  name: string;
  imageUrl: string;
}

// Player Info Type
export interface PlayerInfo {
  code: string;
  name: string;
  age: number;
  imageUrl: string;
  team: PlayerTeam;
}

// Traditional Player
export interface TraditionalPlayer {
  playerRanking: number;
  player: PlayerInfo;
  gamesPlayed: number;
  gamesStarted: number;
  minutesPlayed: number;
  pointsScored: number;
  twoPointersMade: number;
  twoPointersAttempted: number;
  twoPointersPercentage: string;
  threePointersMade: number;
  threePointersAttempted: number;
  threePointersPercentage: string;
  freeThrowsMade: number;
  freeThrowsAttempted: number;
  freeThrowsPercentage: string;
  offensiveRebounds: number;
  defensiveRebounds: number;
  totalRebounds: number;
  assists: number;
  steals: number;
  turnovers: number;
  blocks: number;
  blocksAgainst: number;
  foulsCommited: number;
  foulsDrawn: number;
  pir: number;
}

// Advanced Player
export interface AdvancedPlayer {
  playerRanking: number;
  player: PlayerInfo;
  gamesPlayed: number;
  minutesPlayed: number;
  effectiveFieldGoalPercentage: string;
  trueShootingPercentage: string;
  offensiveReboundsPercentage: string;
  defensiveReboundsPercentage: string;
  reboundsPercentage: string;
  assistsToTurnoversRatio: number;
  assistsRatio: string;
  turnoversRatio: string;
  twoPointAttemptsRatio: string;
  threePointAttemptsRatio: string;
  freeThrowsRate: string;
  possesions: number;
}

export interface MergedPlayer extends TraditionalPlayer {
  effectiveFieldGoalPercentage: string;
  trueShootingPercentage: string;
  offensiveReboundsPercentage: string;
  defensiveReboundsPercentage: string;
  reboundsPercentage: string;
  assistsToTurnoversRatio: number;
  assistsRatio: string;
  turnoversRatio: string;
  twoPointAttemptsRatio: string;
  threePointAttemptsRatio: string;
  freeThrowsRate: string;
  possesions: number;
}
