const express = require("express");
const authRoute=require("./Routes/AuthRoute/Authroutes")
 
const connectToMongodb = require("./Mongodb/mongodb");
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// routing table
app.use("/auth",authRoute);
 

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(8080, async () => {
  try{
      await connectToMongodb; 
  }catch(e){
    console.log("Could not connect")
  } 
  console.log("start server");
});
