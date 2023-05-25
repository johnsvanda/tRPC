import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { appRouter } from './src/app';

export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000);
