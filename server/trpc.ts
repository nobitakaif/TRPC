import { initTRPC } from '@trpc/server';
import type { TodoModel, UserModel } from './db/schema';
 
/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.context<{
    db:{Todo : typeof TodoModel, User : typeof UserModel},
    userId ?: string
}>().create();
 
/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
export const publicProcedure = t.procedure;