const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 4000; 
const dotenv = require("dotenv");

dotenv.config();

 mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser:true,
  });

app.use(express.urlencoded({extended:false}));


const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(express.json());


const userSchema = new mongoose.Schema({
  name: String,
  email:String,
  house:String,
  address:String,
  phone:String,
});

const User = mongoose.model("User", userSchema);


app.post("/api/saveUser", async (req, res) => {
    const { name, email, pin, state, address, house, phone } = req.body;
  
    try {
      const newUser = new User({
        name,
        email,
        house,
        address,
        phone,
        pin,
        state
        
      });
  
      await newUser.save();
      res.json({ message: "User saved to MongoDB" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error saving user" });
    }
  });
  
 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
