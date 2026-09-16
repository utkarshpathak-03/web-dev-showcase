import express from "express";
import profileRoutes from "./routes/profile.routes"
const app = express();
app.use(express.json());

app.use("/v1/profile", profileRoutes);


export default app;