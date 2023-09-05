import express from 'express';
import cors from 'cors';
import { controllers } from './controllers';
import bodyParser from 'body-parser';

class App {
  app;

  constructor() {
    this.app = express();
    this.app.use(cors());
    this.app.use(express.static('public'));

    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json()); // Middleware
    this.app.get('/', (req, res) => {
      // Route handler
      console.log('this is my app');
    });

    this.initializeControllers();
  }

  initializeControllers() {
    var controllersList = controllers();

    controllers().map((controller) => {
      this.app.use('/', controller.router);
    });
  }
}

export default App;
