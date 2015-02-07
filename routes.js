import React from 'react/addons';

import Categories from './components/categories';
import Board from './components/board';
import Thread from './components/thread';

export default {
  "/": Categories,
  "/boards/:id": Board,
  "/boards/:id/:thread_id": Thread
};
