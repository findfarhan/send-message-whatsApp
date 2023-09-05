import baseController from './base.controller';

class sendMessageController extends baseController {
  constructor() {
    super('/send');
    this.initializeRouter();
  }

  initializeRouter() {
    this.router.post(
      `${this.parentRouterPath}/send-message`,
      this.sendMessageWhatsapp
    );
  }
  sendMessageWhatsapp = async (req, res, next) => {
    try {
      const user = await this._sendMessage.sendMessageWhatsapp(req);

      if (user) {
        res.send('success', user, undefined);
      }
    } catch (error) {
      next(error);
      res.send('Error', error, undefined);
    }
  };
}

export default sendMessageController;
