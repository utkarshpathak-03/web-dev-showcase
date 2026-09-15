import express from "express";
import profileRoutes from "./routes/profile.routes"
const app = express();

app.use("/v1/profile", profileRoutes);

app.use(express.json());

export default app;