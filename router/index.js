import { usersRoute } from "./use.route.js";
import { authRoute } from "./auth.route.js";
export const router = (app) => {
    usersRoute(app);
    authRoute(app)
}