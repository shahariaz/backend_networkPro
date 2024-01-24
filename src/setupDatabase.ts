import mongoose from 'mongoose';
import Logger from 'bunyan'
import {config} from './config'

const log:Logger = config.createLogger("setupDatabase")
export default ()=>{
    const connect = ()=>{
        mongoose.connect(`${config.DB_URI}`).then(()=>{
            console.log('Successfully connected to database');
        }).catch((error)=>{
            log.error('Error connecting to database');
            return process.exit(1);
        })
    }
    connect();
    mongoose.connection.on('disconnected',connect);
}