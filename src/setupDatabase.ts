import mongoose from 'mongoose';
import {config} from './config'
export default ()=>{
    const connect = ()=>{
        mongoose.connect(`${config.DB_URI}`).then(()=>{
            console.log('Successfully connected to database');
        }).catch((error)=>{
            console.log('Error connecting to database');
            return process.exit(1);
        })
    }
    connect();
    mongoose.connection.on('disconnected',connect);
}