import { mysqlTable, varchar, text, bigint } from 'drizzle-orm/mysql-core';

export const tourist_attraction = mysqlTable('tourist_attraction', {
    id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
    tourist_name: varchar('tourist_name', { length: 100 }),
    location: varchar('location', { length: 100 }),
    coordinates: varchar('coordinates', { length: 50 }),
    operation_hours: varchar('operation_hours', { length: 100 }),
    contact_information: varchar('contact_information', { length: 100 }),
    description: text('description'),
    price: varchar('price', { length: 20 }),
    facilities: text('facilities'),
    activities: text('activities'),
});
