import express from "express";
import {
  addSavingsFunds,
  createRekening,
  createRekeningIncUser,
  deleteRekening,
  deleteRekeningByNomorRekening,
  getAllRekening,
  getRekeningById,
  getRekeningByNomorRekening,
  tarikTunai,
  transferRekening,
  updateRekening,
  updateRekeningByNomorRekening,
} from "../controllers/rekeningController";

export default function rekeningRoutes() {
  const router = express.Router();

  router.get("/", getAllRekening);
  router.get("/:id", getRekeningById);
  router.post("/", createRekening);
  router.patch("/norek/:norek", updateRekeningByNomorRekening);
  router.patch("/:id", updateRekening);
  router.delete("/norek/:norek", deleteRekeningByNomorRekening);
  router.delete("/:id", deleteRekening);

  // GET BY NOREK
  router.get("/norek/:norek", getRekeningByNomorRekening);

  // CREATE NEW DATA INCLUDE USER
  router.post("/newrek", createRekeningIncUser);

  // TRANSFER
  router.post("/transfer", transferRekening);

  // TARIK TUNAI
  router.post("/tarik-tunai", tarikTunai);

  // TAMBAH TABUNGAN
  router.post("/saving-funds", addSavingsFunds);

  return router;
}
