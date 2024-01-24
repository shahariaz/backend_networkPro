import dotenv from "dotenv";
dotenv.config();
import bunyan from "bunyan";
class Config{
    public DB_URI: string |undefined;
    public SERVER_PORT: number ;
    public JWT_TOKEN: string | undefined;
    public SECRET_KEY_ONE: string | undefined;
    public SECRET_KEY_TWO: string | undefined;
    public CLIENT_URL: string | undefined;
    public NODE_ENV: string | undefined;
    public REDIS_HOST: string | undefined;
    
    
    private readonly DEFAULT_DB_URI = 'mongodb://localhost:27017/networkPro';
    private readonly DEFAULT_SERVER_PORT = 5000;
         
    constructor(){
        this.DB_URI = process.env.DATABASE_URI || this.DEFAULT_DB_URI;
        this.JWT_TOKEN = process.env.JWT_TOKEN || 'this';
        this.NODE_ENV = process.env.NODE_ENV || '';
        this.SECRET_KEY_ONE = process.env.SECRET_KEY_ONE || '';
        this.SECRET_KEY_TWO = process.env.SECRET_KEY_TWO || '';
        this.CLIENT_URL = process.env.CLIENT_URL || '';
        this.REDIS_HOST = process.env.REDIS_HOST || '';

        this.SERVER_PORT = Number(process.env.PORT) || this.DEFAULT_SERVER_PORT;
    }
    public createLogger(name: string):bunyan{
        return bunyan.createLogger({name,level:'debug'});
    }
    public validateConfig():void{
      
        /*   const requiredConfig = [
            this.DB_URI,
            this.JWT_TOKEN,
            this.SECRET_KEY_ONE,
            this.SECRET_KEY_TWO,
            this.CLIENT_URL,
            this.SERVER_PORT
        ];
        const isConfigMissing = requiredConfig.some((config)=>!config);
        if(isConfigMissing){
            throw new Error('Missing config');
        }*/
       

        for (const [key,value] of Object.entries(this)){
            if(value === undefined){
                throw new Error(`Missing config ${key}`);
            }
        }
       
    }
}
export const config:Config = new Config();