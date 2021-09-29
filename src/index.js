const express = require("express");
const morgan = require("morgan");
const path = require("path");

const { mongoose } = require("./database");

const app = express();

//Settings
//Para el despliegue
app.set("port", process.env.PORT || 3000);

//Middlewares
//Funciones que se ejecutan antes de llegar a las rutas
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/task", require("./routes/task.routes"));

//Static Files
app.use(express.static(path.join(__dirname, "public")));

//Starting the server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
