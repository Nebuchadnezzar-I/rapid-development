import express from 'express';
import cors from 'cors';
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from './router';
import { createContext } from './trpc';

const app = express();
const port = 4000;

app.use(
    cors({
        origin: '*',
        credentials: true,
    }),
);

app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
        router: appRouter,
        createContext,
    }),
);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
