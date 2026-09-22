import express from "express";
import profileRoutes from "./routes/profile.routes"
import exercisesRoutes from "./routes/exercises.routes"
import workoutRoutes from "./routes/workout.routes"
const app = express();
app.use(express.json());

app.use("/v1/profile", profileRoutes);
app.use("/v1/exercises", exercisesRoutes);
app.use("/v1", workoutRoutes);


export default app;