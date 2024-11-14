import { Request, Response } from 'express';
import * as playerService from '../services/player.service';

// Route to get player stats
export const getPlayerStats = async (req: Request, res: Response): Promise<void> => {
  try {
    const player = await playerService.getPlayerById(req.params.id);
    if (!player) {
      res.status(404).json({ msg: 'Player not found' });
      return;
    }
    res.json(player);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Route to update player score after game ends
export const updatePlayerScore = async (req: Request, res: Response): Promise<void> => {
  const { playerId, score } = req.body;
  try {
    const updatedPlayer = await playerService.updatePlayerScore(playerId, score);
    if (!updatedPlayer) {
        res.status(404).json({ msg: 'Player not found' });
        return;
    }
    res.json({ msg: 'Player score updated', updatedPlayer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Route to create a new player
export const createNewPlayer = async (req: Request, res: Response): Promise<void> => {
  const { name, email } = req.body;
  try {
    const newPlayer = await playerService.createNewPlayer(name, email);
    res.status(201).json(newPlayer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};
