import { Request, Response, Router } from 'express';
import { putItem, getItem, scanTable } from '../../utils/dynamodb';
import { v4 as uuidv4 } from 'uuid';
import AWS from 'aws-sdk';

const dynamodb = new AWS.DynamoDB.DocumentClient();
const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const table = await scanTable('tr-vote');
    res.status(200).json(table);
  } catch (error) {
    console.error('An error ocurred:', error);
    res.status(500).json(error);
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const book = await getItem('books', { id });
    res.status(200).json(book);
  } catch (error) {
    console.error('Error fetching book:', error);
    res.status(500).json({ error: 'Could not fetch book' });
  }
});

router.post('/', async (req: Request, res: Response) => {
  const book = {
    id: uuidv4(),
    ...req.body,
  };

  try {
    await putItem('tr-vote', book);
    res.status(201).json({ message: 'Book created' });
  } catch (error) {
    console.error('Error creating book:', error);
    res.status(500).json({ error: 'Could not create book' });
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    res.status(200).json({});
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json(error);
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    res.status(200).json({});
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json(error);
  }
});

export default router;
