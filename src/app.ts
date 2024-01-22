import express, {Express} from 'express';
import { NewtworkServer } from './setupServer';
import databaseConnection from './setupDatabase'
import {config} from './config';
class Application{

    public initalize():void{
        this.loadConfig();
        databaseConnection();
        const app:Express = express();
        const server:NewtworkServer = new NewtworkServer(app);
        server.start();
    }
    private loadConfig():void{
        config.validateConfig();

    }
}

const application = new Application();
application.initalize();