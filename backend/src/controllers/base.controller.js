import express from 'express';
import { sendMessage } from '../services/sendMessage.service.js';

class baseController {
  router;
  parentRouterPath;

  _sendMessage;

  constructor(routerPath) {
    this.parentRouterPath = routerPath;
    this.router = express.Router();

    this._sendMessage = new sendMessage();
  }
}

export default baseController;
