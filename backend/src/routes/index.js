/**
 * Master API Router
 * Aggregates all route modules under the /api prefix.
 */

import { Router } from 'express';
import authRoutes from './auth.routes.js';
import productRoutes from './product.routes.js';
import { cartRouter, wishlistRouter } from './cart.routes.js';
import orderRoutes from './order.routes.js';
import { inventoryRouter, showroomRouter } from './showroom.routes.js';
import { connectRouter, qualityRouter, productionRouter } from './connect.routes.js';
import eventRoutes from './event.routes.js';

const apiRouter = Router();

apiRouter.use('/auth', authRoutes);
apiRouter.use('/products', productRoutes);
apiRouter.use('/cart', cartRouter);
apiRouter.use('/wishlist', wishlistRouter);
apiRouter.use('/orders', orderRoutes);
apiRouter.use('/inventory', inventoryRouter);
apiRouter.use('/showrooms', showroomRouter);
apiRouter.use('/fashion-links', connectRouter);
apiRouter.use('/quality', qualityRouter);
apiRouter.use('/production', productionRouter);
apiRouter.use('/events', eventRoutes);

export default apiRouter;
