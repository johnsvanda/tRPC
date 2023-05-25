import { router } from "../trpc";
import { userRouter } from "./routers/user.router";

export const appRouter = router({
    user: userRouter
  })
  
  // Export type router type signature,
  // NOT the router itself.
  export type AppRouter = typeof appRouter;
  