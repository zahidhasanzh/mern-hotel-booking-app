import mongoose from "mongoose";

const connectedDB = () => {
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
         console.log("Mongodb connected successfully");
    }).catch((error) => {
        console.log(error);
    })
}

export default connectedDB