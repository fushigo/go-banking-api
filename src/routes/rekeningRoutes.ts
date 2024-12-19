import express from "express";
import {
  createRekening,
  deleteRekening,
  getAllRekening,
  getRekeningById,
  updateRekening,
} from "../controllers/rekeningController";

export default function rekeningRoutes() {
  const router = express.Router();

  router.get("/", getAllRekening);
  router.get("/:id", getRekeningById);
  router.post("/", createRekening);
  router.patch("/:id", updateRekening);
  router.delete("/:id", deleteRekening);

  return router;
}
