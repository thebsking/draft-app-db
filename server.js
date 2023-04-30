const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const sequelize = require('./config/connection');
require('dotenv').config();
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const apiRoutes = require('./controllers')

app.use([
  express.urlencoded({ extended: true }),
  express.json()
]);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const sess = {
  secret: process.env.REACT_APP_SECRET,
  cookie: {maxAge: 300000},
  resave: false,
  rolling: true,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Link API Routes here
app.use(apiRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//sync sequelize models to db, then start sever
sequelize.sync({})
.then(()=> {
  app.listen(PORT, () => {
    console.log("🚀  Server server now on port", PORT, "👻 React App on Port 3000");
  });
});
