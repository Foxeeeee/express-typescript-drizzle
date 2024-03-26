import { Request, Response } from 'express';
import { db } from '../db/connection';
import { tourist_attraction } from '../db/schema';
import { eq, like, sql } from 'drizzle-orm';

export const getData = async (req: Request, res: Response) => {
    try {
        const getData = await db.select().from(tourist_attraction);
        return res.status(200).json({ data: getData });
    } catch (error) {
        console.error('Error to get data', error);
        return res.status(500).json({ message: 'Failed to get data!' });
    }
};

export const getDataById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const getById = await db.select().from(tourist_attraction).where(eq(tourist_attraction.id, Number(id)));
        return res.status(200).json({ data: getById });
    } catch (error) {
        console.error('Error to get data', error);
        return res.status(500).json({ message: 'Failed to get data!' });
    }
};

