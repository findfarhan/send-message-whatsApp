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
      const result = await this._sendMessage.sendMessageWhatsapp(req);
      console.log('Message sent successfully');
      res
        .status(200)
        .json({ message: 'Message sent successfully', data: result });
    } catch (error) {
      console.error('Error:', error);

      next(error);
      res
        .status(500)
        .json({ error: 'An error occurred while sending the message' });
    }
  };
}

export default sendMessageController;
