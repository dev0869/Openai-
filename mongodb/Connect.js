import mongoose from "mongoose";
const url = "mongodb+srv://devesh:7533054803qwe@aiimagegenerator.tszyehf.mongodb.net/?retryWrites=true&w=majority"
mongoose.set('strictQuery', true);

// const connectDb =  () => {
//   try {
//      mongoose.connect(url);
//     console.log('Successfully connected to MongoDB database.');
//   } catch (error) {
//     console.error('Error connecting to MongoDB database: ', error);
//   }
// }

// export default connectDb;



const connectDb = () => {
  mongoose.set('strictQuery', true);
  mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to mongo'))
    .catch((err) => {
      console.error('failed to connect with mongo');
      console.error(err);
    });
};
 export default connectDb;
