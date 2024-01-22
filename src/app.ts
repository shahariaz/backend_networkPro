import express, {Express} from 'express';
import { NewtworkServer } from './setupServer';
import databaseConnection from './setupDatabase'
class Application{

    public initalize():void{
        databaseConnection();
        const app:Express = express();
        const server:NewtworkServer = new NewtworkServer(app);
        server.start();
    }
}
const application = new Application();
application.initalize();