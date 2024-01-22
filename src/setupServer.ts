import {Application,json,urlencoded,Response,Request,NextFunction} from 'express'
import {Server} from 'http'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import CookierSession from 'cookie-session'
import HTTP_STATUS from 'http-status-codes';
import 'express-async-errors'
import hpp from 'hpp';
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
  private securityMiddleware(app:Application):void{}
  private standerdMiddleware(app:Application):void{}
  private routeMiddleware(app:Application):void{}
  private globalErrorMiddleware(app:Application):void{}
  private startServer(app:Application):void{}
  private createSockeIO(httpServer:Server):void{}
  private startHttpServer(httpServer:Server):void{}

}