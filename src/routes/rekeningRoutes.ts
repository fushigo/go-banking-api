import express from "express";
import {
  createRekening,
  createRekeningIncUser,
  deleteRekening,
  getAllRekening,
  getRekeningById,
  getRekeningByNomorRekening,
  updateRekening,
} from "../controllers/rekeningController";

export default function rekeningRoutes() {
  const router = express.Router();

  router.get("/", getAllRekening);
  router.get("/:id", getRekeningById);
  router.post("/", createRekening);
  router.patch("/:id", updateRekening);
  router.delete("/:id", deleteRekening);

  //GET BY NOREK
  router.get("/norek/:norek", getRekeningByNomorRekening);

  //CREATE NEW DATA INCLUDE USER
  router.post("/newrek", createRekeningIncUser);

  return router;
}
