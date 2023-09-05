import InfoBip from 'infobip-nodejs';

export class sendMessage {
  async sendMessageWhatsapp(req) {
    const { subject, description, url, phone_no } = req.body;
    console.log(req.body);

    const API_KEY =
      '9ed9a7e695cbd9006dc307badaae20d0-47a0f19f-37c4-482e-919b-908729e6ec67';
    const USERNAME = 'Usman143';
    const PASSWORD = 'ug!88p&A2$Tv_E2';
    const BASEHOST = '8g5v61.api.infobip.com';
    const environment = false;
    const isProduction = environment === false;

    // Create the Infobip instance with the correct API key and base host
    const infobip = new InfoBip(API_KEY, isProduction, {
      authType: 'basic',
      username: USERNAME,
      password: PASSWORD,
      encrypted: false,
      baseHost: BASEHOST,
    });

    console.log('APIKEY:', API_KEY);
    console.log('baseHost:', BASEHOST);

    // Define the message payload
    const messagePayload = {
      from: phone_no, // Replace with your sender ID
      destinations: [{ to: '+447860099299' }], // Replace with the recipient's phone number
      text: `${subject} Dear Customer, Thanks for ${description} registering with our ${url} service.`,
    };

    try {
      // Send the SMS
      const response = await infobip.sendSMS({
        messages: [messagePayload],
      });

      console.log('Request Payload:', JSON.stringify(messagePayload, null, 2));
      console.log('Response body:', response.body);
    } catch (error) {
      console.error('Error:', error.message);
      console.error('Error Response:', error.response.body);
    }
  }
}
