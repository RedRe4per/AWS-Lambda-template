import { Router } from 'express';
import {
  listAll,
  getById,
  create,
  update,
  deleteById,
} from '../controllers/users.controller';

const router = Router();

router.get('/', listAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', deleteById);

export default router;
