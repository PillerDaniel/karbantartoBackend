import express from 'express';
import type { Request, Response } from 'express';
import config from 'config';
import cors from 'cors';

const PORT = config.get<number>('PORT');
const app: any = express();

const corsOptions: cors.CorsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/api', (req: Request, res: Response) => {
    res.send('API running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
