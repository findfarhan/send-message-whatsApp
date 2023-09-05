import sendMessageController from './sendMessage.controller.js';

export const controllers = function name() {
  return [new sendMessageController()];
};
