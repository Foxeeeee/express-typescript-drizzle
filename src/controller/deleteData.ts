import { Request, Response } from 'express';
import { db } from '../db/connection';
import { tourist_attraction } from '../db/schema';
import { eq } from 'drizzle-orm';

export const deleteData = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        await db.delete(tourist_attraction).where(eq(tourist_attraction.id, Number(id)));
        return res.status(200).json({message: 'Delete data succesfully!'});
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({message: 'Failed to delete data!'});
    }
}