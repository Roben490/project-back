export interface IPlayer extends Document {
    username: string;
    score: number;
    lives: number;
    createdAt: Date;
  }