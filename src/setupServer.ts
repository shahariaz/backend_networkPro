import {Application,json,urlencoded,Response,Request,NextFunction} from 'express'
import http,{Server} from 'http'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import CookierSession from 'cookie-session'
import HTTP_STATUS from 'http-status-codes';
import 'express-async-errors'
import hpp from 'hpp';
import cookieSession from 'cookie-session'
import {config} from 'dotenv'
config();

const SERVER_PORT = process.env.PORT || 5000;
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
            keys:['test1','test2'],
            maxAge:24*7*60*60*1000,
            secure:false,

        })
    );
    app.use(helmet());
    app.use(hpp());
    app.use(
        cors({
            origin:'*',
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
  private routeMiddleware(app:Application):void{}
  private globalErrorMiddleware(app:Application):void{}
  private async startServer(app:Application):Promise<void>{
    try {
        const httpServer:http.Server = new http.Server(app);
        this.startHttpServer(httpServer);
    } catch (error) {
        
    }
  }
  private createSockeIO(httpServer:Server):void{}
  private startHttpServer(httpServer:Server):void{
    httpServer.listen(SERVER_PORT,()=>{
        console.log(`Server is running on port ${SERVER_PORT}`)
    })
  }

}