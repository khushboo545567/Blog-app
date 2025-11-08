import express from "express";
import cors from "cors";
import errorMiddleware from "./middleware/error.middleware.js";
import authRouter from "./routes/auth.route.js";
import postarticle from "./routes/post.route.js";
import catogery from "./routes/catogery.route.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cors configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

//auth routes
app.use("/api/v1/users", authRouter);

// post routes
app.use("/api/v1/post", postarticle);

// catogery
app.use("/api/v1/catogery", catogery);

// errorHandling
app.use(errorMiddleware);
export default app;
