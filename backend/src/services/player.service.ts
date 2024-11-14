import { IPlayer } from '../interfaces/IPlayer';
import { Player } from '../models/Player.model';

// Get a player by ID
export const getPlayerById = async (id: string): Promise<IPlayer | null> => {
  try {
    return await Player.findById(id);
  } catch (error) {
    throw new Error('Error fetching player');
  }
};

// Update player score
export const updatePlayerScore = async (playerId: string, score: number) => {
  try {
    const player = await Player.findById(playerId);
    if (!player) {
      throw new Error('Player not found');
    }
    player.score = score;
    await player.save();
    return player;
  } catch (error) {
    throw new Error('Error updating player score');
  }
};

// Create a new player
export const createNewPlayer = async (name: string, email: string) => {
  try {
    const newPlayer = new Player({
      name,
      email,
      score: 0, // default score
      lives: 3, // default lives
    });
    await newPlayer.save();
    return newPlayer;
  } catch (error) {
    throw new Error('Error creating new player');
  }
};
