import { DataSource } from 'typeorm';
import config from 'config';

const DBURL = config.get<string>('DBURL');

const connectDB = async (): Promise<void> => {
    const AppDataSource = new DataSource({
        type: 'postgres',
        url: DBURL,
        synchronize: true,
        logging: false,
        entities: ['../models/**/*.ts'],
        migrations: ['../migrations/**/*.ts'],
        subscribers: ['../subscribers/**/*.ts'],
    });

    try {
        await AppDataSource.initialize();
        console.log('Database connected successfully');
    } catch (err) {
        console.error('Error connecting to the database', err);
        process.exit(1);
    }
};

export default connectDB;
