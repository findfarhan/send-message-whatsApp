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
        url: 'https://ppy2p8.api.infobip.com/whatsapp/1/message/text',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'App 19f91232cc563df6d5b7a458f7102471-bdae5769-d9b3-4df0-8631-f5a006ba5746',
        },
        data: data,
      };

      const response = await axios.request(config);
      // console.log('Data:', response.data); // Log the response data
      return response.data; // Return the response data
    } catch (error) {
      console.error('Error:', error);
      throw error; // Rethrow the error to be handled in the controller
    }
  }
}
