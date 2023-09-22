import { Router } from "express";
import { getPersons, addPersons } from "../controllers/mainController.js";

const app = Router();

app.post("/get_persons", getPersons);
app.post("/add_persons", addPersons);

export default app;