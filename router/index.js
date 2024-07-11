import { usersRoute } from "./use.route.js";
import { authRoute } from "./auth.route.js";
import { BrandRoute } from "./brand.router.js";
import { CategoryRoute } from "./category.router.js";
import { OrdersRoute } from "./orders.router.js";
import { ProductRoute } from "./products.router.js";
export const router = (app) => {
    usersRoute(app);
    authRoute(app);
    BrandRoute(app);
    CategoryRoute(app);
    OrdersRoute(app);
    ProductRoute(app)
}