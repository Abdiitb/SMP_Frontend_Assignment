import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Route import
import contactRouter from "./routes/contact.route.js";

app.use('/api/v1/contact', contactRouter);

export { app };