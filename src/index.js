// require("dotenv").config();
import dotenv from "dotenv";
dotenv.config({
    path: "./.env",
});
import connectDB from "./db/index.js";


connectDB();











// (async () =>{
//     try {
//       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//     } catch (error) {
//         console.log("Error:", error);
//         throw error;
//     }
// })() 