import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (_req: Request, res: Response) => {
    res.send({ message: 'Hello from the server!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
