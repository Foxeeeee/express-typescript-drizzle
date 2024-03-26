import { Request, Response } from 'express';
import { db } from '../db/connection';
import { tourist_attraction } from '../db/schema';

export const insertTourist = async (req: Request, res: Response) => {
  const { body } = req;

  const requiredColumns: string[] = [
    'tourist_name',
    'location',
    'coordinates',
    'operation_hours',
    'contact_information',
    'description',
    'price',
    'facilities',
    'activities'
  ];

  if (requiredColumns.some(col => !body[col])) {
    return res.status(400).json({ message: `All column must be filled in. Missing column ${requiredColumns.filter(col => !body[col].join(', '))}` });
  };

  try {
    await db.insert(tourist_attraction).values(body);
    return res.status(201).json({ message: 'Added successfully!' });
  } catch (error) {
    console.error('Error adding tourist attraction:', error);
    return res.status(500).json({ message: 'Failed to add data!' });
  }
};