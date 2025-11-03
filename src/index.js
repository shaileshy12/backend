// require("dotenv").config();
import dotenv from "dotenv";
dotenv.config({
    path: "./.env",
});

import connectDB from "./db/index.js";


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at : ${process.env.PORT}`);
    })
})
.catch((err) => {
 console.log("MONGODB Connection Failed !!", err);
})











// (async () =>{
//     try {
//       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//     } catch (error) {
//         console.log("Error:", error);
//         throw error;
//     }
// })() 