import express, {Express} from 'express';
import { NewtworkServer } from './setupServer';
class Application{

    public initalize():void{
        const app:Express = express();
        const server:NewtworkServer = new NewtworkServer(app);
        server.start();
    }
}
const application = new Application();
application.initalize();