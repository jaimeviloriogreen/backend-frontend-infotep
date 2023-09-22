import express from "express";
import cors from "cors";
import router from "./routes/mainRoutes.js";

const port = 4500;
const app = express();

app.use( cors() );
app.use(express.json({"Content-Type":"application/json"}));
app.use(router);


app.use(express.static('public'));

app.listen(port, ()=> console.log(`Listening on port ${ port }`));