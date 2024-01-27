import colors from 'colors';
import mongoose from 'mongoose';
//moongose provide more functionality to use database
//and by using morgan we can see which the ip hit 
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`connecting to the mongoDB database ${conn.connection.host}`.bgMagenta.white)
    }
    catch (error) {
        console.log(`error in mongodb ${error}`.bgRed.white)
    }
};
export default connectDB;
