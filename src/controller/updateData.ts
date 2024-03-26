import { Request, Response } from 'express';
import { db } from '../db/connection';
import { tourist_attraction } from '../db/schema';
import { eq } from 'drizzle-orm';

export const updateData = async (req: Request, res: Response) => {
    const { id } = req.params;
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

    try {
        if (!id) {
            return res.status(2).json({ message: 'Cant find any data' });
        };

        for (const col of requiredColumns) {
            if (!req.body[col]) {
                return res.status(400).json({ message: "Please provide field to update!" });
            };
        };

        const updateData: Record<string, string> = {};

        requiredColumns.forEach(col => {
            if (req.body[col]) {
                updateData[col] = req.body[col];
            };
        });

        await db.update(tourist_attraction).set(updateData).where(eq(tourist_attraction.id, Number(id)));
        return res.status(200).json({ message: 'Updated succesfully!' });

    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Failed to update data!' });
    }
};