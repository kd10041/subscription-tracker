import mongoose from 'mongoose';
import { DB_URI, NODE_ENV } from "../config/env.js";

if(!DB_URI){
    throw new error('Please define the MONGODB_URI enviornment variable inside .env.<development/production>.local');
}

const connectToDatabase= async()=>{
    try{
        await mongoose.connect(DB_URI);
        
        console.log(`Conneted to database in ${NODE_ENV} mode`);
    } catch(error){
        console.error('Error connecting to database: ',error);

        process.exit(1);
    }
}

//export
export default connectToDatabase;