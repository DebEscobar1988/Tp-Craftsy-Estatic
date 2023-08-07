const express = require("express");
const path = require( "path");

const app = express();
const PORT = 3030;

app.use(express.static('public'))

/* rutas */
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname,"views", "home.html"))
);
/* rutas */
app.get("/header", (req, res) =>
  res.sendFile(path.join(__dirname,"views", "partials", "header.html"))
);
app.get("/main", (req, res) =>
  res.sendFile(path.join(__dirname,"views", "partials", "main.html"))
);
app.get("/footer", (req, res) =>
  res.sendFile(path.join(__dirname,"views", "partials", "footer.html"))
);
/* app.get("/flex", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "flex.html"))
); */

app.listen(PORT, ()=>
  console.log(`Server running in http://localhost:${PORT}`)
);