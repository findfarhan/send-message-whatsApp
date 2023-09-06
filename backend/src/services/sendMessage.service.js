import axios from 'axios';

export class sendMessage {
  async sendMessageWhatsapp(req) {
    const { subject, description, url, phone_no } = req.body;
    console.log(req);
    try {
      let data = JSON.stringify({
        from: '447860099299',
        to: phone_no,
        messageId: 'test-message-125',
        content: {
          text: `Subject: ${subject} 
          Description: ${description} 
          URL: ${url} 
          Phone_No.: ${phone_no}`,
        },
        callbackData: 'Callback data',
      });

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://8g5v61.api.infobip.com/whatsapp/1/message/text',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'App 9ed9a7e695cbd9006dc307badaae20d0-47a0f19f-37c4-482e-919b-908729e6ec67',
        },
        data: data,
      };

      const response = await axios.request(config);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
}
