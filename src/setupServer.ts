import {Application,json,urlencoded,Response,Request,NextFunction} from 'express'
import http from 'http'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import CookierSession from 'cookie-session'
import HTTP_STATUS from 'http-status-codes';
import 'express-async-errors'
import hpp from 'hpp';
import cookieSession from 'cookie-session'
import { Server } from 'socket.io'
import { createClient } from 'redis'
import { createAdapter } from '@socket.io/redis-streams-adapter'

//file
import {config} from './config'
import applicationRoute from './routes'
import { CustomError, IErrorResponse } from './shared/global/helpers/error-handler'


export class NewtworkServer{
 private app:Application;
  constructor(app:Application){
    this.app = app;

  }
  public start():void{

    this.securityMiddleware(this.app);
    this.standerdMiddleware(this.app);
    this.routeMiddleware(this.app);
    this.globalErrorMiddleware(this.app);
    this.startServer(this.app);

  }
  private securityMiddleware(app:Application):void{
    app.use(
        cookieSession({
            name: 'cookie-session',
            keys:[config.SECRET_KEY_ONE!,config.SECRET_KEY_TWO!],
            maxAge:24*7*60*60*1000,
            secure:config.NODE_ENV === 'production',

        })
    );
    app.use(helmet());
    app.use(hpp());
    app.use(
        cors({
            origin:config.CLIENT_URL,
            credentials:true,
            optionsSuccessStatus:200,
            methods:['GET','POST','PUT','DELETE','PATCH','OPTIONS'],
        })
    )
  }
  private standerdMiddleware(app:Application):void{
    app.use(json({limit:'50mb'}));
    app.use(urlencoded({extended:true,limit:'50mb'}));
    app.use(compression());
  }
  private routeMiddleware(app:Application):void{
    applicationRoute(app);
  }
  private globalErrorMiddleware(app:Application):void{
    app.all('*',(req:Request,res:Response,next:NextFunction)=>{
      res.status(HTTP_STATUS.NOT_FOUND).json({message:`${req.originalUrl} is not found`});
    })
    app.use((error:IErrorResponse,req:Request,res:Response,next:NextFunction)=>{
      console.log(error);
      if(error instanceof CustomError){
        res.status(error.statusCode).json(error.serializeErrors());
      }
    })
  }
  private async startServer(app:Application):Promise<void>{
    try {
        const httpServer:http.Server = new http.Server(app);
        const socketIO:Server = await this.createSocketIO(httpServer);

        this.startHttpServer(httpServer);
        this.socketIOConnections(socketIO);

    } catch (error) {
      console.error('Error starting server:', error);  
    }
  }
  private async createSocketIO(httpServer: http.Server): Promise<Server> {
    const io: Server = new Server(httpServer, {
        cors: {
            origin: config.CLIENT_URL,
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        },
    });

    const pubClient = createClient({ url: config.REDIS_HOST });
    const subClient = pubClient.duplicate();

    await Promise.all([pubClient.connect(), subClient.connect()]);

    io.adapter(createAdapter(pubClient as any, subClient as any));

    return io;
  }
  private startHttpServer(httpServer:http.Server):void{
    console.log(`server has started with process ${process.pid}`);
    httpServer.listen(config.SERVER_PORT,()=>{
        console.log(`Server is running on port ${config.SERVER_PORT}`)
    })
  }
  private socketIOConnections(io:Server):void {};

}