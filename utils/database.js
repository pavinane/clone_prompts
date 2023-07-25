import mongoose from "mongoose";

let connectedIs = false;


export const ConnectedDb = async () => {
    mongoose.set('strictQuery',true);

    if(connectedIs){
        console.log("MongoDB is Connected")
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL,{
            dbName:"SharePrompt",
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        connectedIs = true;

        console.log("MongoDB connected")
    } catch (error) {
        console.log(error)
    }
}