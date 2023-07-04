require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const usersRoute = require("./Routes/user");
const productsRoute = require("./Routes/products");
const orderRoute = require("./Routes/order");
const cartRoute = require("./Routes/cart");
const stripeRoute = require("./Routes/stripe");
const cors = require("cors");
const path = require("path"); //! this should be required unless heroku will throw error "path is not defined"

app.use(cors());
//body Parser
app.use(express.json());

//!reasigning the value of our mongodb string conncetion into another variable as follows
const uri = process.env.MONGO_URL;

//!creating a new connection using Mongoose.connect methode
mongoose.connect(
  uri,
  () => {
    console.log("connected to mongodb");
    //Port listening

    const server = app.listen(process.env.PORT || 5000, () => {
      const port = server.address().port;
      console.log(`Server running on port:${port}`);
    });
  },
  (err) => {
    console.log(err);
  }
);

//! Routes
app.use("/users", usersRoute);
app.use("/products", productsRoute);
app.use("/orders", orderRoute);
app.use("/carts", cartRoute);
app.use("/checkout", stripeRoute);

//!heroku code

// app.use(express.static(path.join(__dirname, "/client/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "/client/build", "index.html"));
// });
