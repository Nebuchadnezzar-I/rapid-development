import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
// eslint-disable-next-line import/no-relative-packages
import type { AppRouter } from '../../server/src/router';

export const trpc = createTRPCProxyClient<AppRouter>({
    links: [
        httpBatchLink({
            url: 'http://localhost:4000/trpc',
        }),
    ],
});
