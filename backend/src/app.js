import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Contact Router import
import contactRouter from "./routes/contact.route.js";
// Contact Routes
app.use('/api/v1/contact', contactRouter);

// Course Router import
import courseRouter from "./routes/course.route.js";
// Course Routes
app.use('/api/v1/course', courseRouter);

// Blog Router import
import blogRouter from "./routes/blog.route.js";
// Blog Routes
app.use('/api/v1/blog', blogRouter);

export { app };