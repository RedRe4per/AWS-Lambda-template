import * as UserService from '../services/users.service';
import { Request, Response } from 'express';

export const listAll = async (req: Request, res: Response) => {
  try {
    const users = await UserService.listAll();
    res.status(200).json(users);
  } catch (error) {
    console.error('An error ocurred:', error);
    res.status(500).json(error);
  }
};

export const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await UserService.getById(id);
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Could not fetch user' });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const user = await UserService.create(req.body);
    res.status(201).json({ message: 'new user created', item: user });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Could not create user' });
  }
};

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await UserService.update(id, req.body);
    res.status(200).json({ message: 'User updated' });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Could not update user' });
  }
};

export const deleteById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await UserService.deleteById(id);
    res.status(200).json({ message: 'User deleted' });
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json({ error: 'Could not delete user' });
  }
};
