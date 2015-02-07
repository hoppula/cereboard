import routes from './routes';

import Categories from './stores/categories';
import Board from './stores/board';
import Thread from './stores/thread';

export default {
  staticFiles: __dirname+"/public",
  storeId: "store_state_from_server",
  appId: "app",
  routes: routes, // shared routes required from routes.js
  stores: {
    categories: Categories,
    board: Board,
    thread: Thread
  }
};