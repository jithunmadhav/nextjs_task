// import mongoose from "mongoose";

// export const dbconnect=()=>{
//     mongoose.connect(`${process.env.MONGOOSE_CONNECT}`).then(()=>{
//         console.log("DBconnected");
//     }).catch((err)=>{
//         console.log(err);
//     })
// }

import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_CONNECT);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;