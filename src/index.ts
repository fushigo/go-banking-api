import express from "express";
import dotenv from "dotenv";
import { Request, Response } from "express";
import nasabahRoutes from "./routes/nasabahRoutes";
import karyawanRoutes from "./routes/karyawanRoutes";
import rekeningRoutes from "./routes/rekeningRoutes";
import rekeningActivityRoutes from "./routes/rekeningActivityRoutes";
import logActivityRoutes from "./routes/logActivityRoutes";

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 3000;
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Welcome to the GoBanking API!");
});

// Routes
app.use("/nasabah", nasabahRoutes());
app.use("/karyawan", karyawanRoutes());
app.use("/rekening", rekeningRoutes());
app.use("/rekening-activity", rekeningActivityRoutes());
app.use("/log-activity", logActivityRoutes());

app.listen(port, () => console.log("Server is running on port: ", port));
