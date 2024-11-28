const express = require("express");
const path = require("path");
 const router = require("./router/router");
const app = express();
    

// Middleware to parse incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set view engine and views folder
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files (CSS)
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Use the router
app.use("/", router);

// Start the server
app.listen(4000, () => console.log("Server running at http://localhost:4000"));