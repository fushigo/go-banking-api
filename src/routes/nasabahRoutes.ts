import {
  createNasabah,
  deleteNasabah,
  deleteNasabahByNik,
  getAllNasabah,
  getNasabahById,
  getNasabahByNik,
  updateNasabah,
} from "../controllers/nasabahController";
import express from "express";

export default function nasabahRoutes() {
  const router = express.Router();

  router.get("/", getAllNasabah);
  router.get("/:id", getNasabahById);
  router.post("/", createNasabah);
  router.patch("/:id", updateNasabah);
  router.delete("/:id", deleteNasabah);

  //GET BY NIK
  router.get("/nik/:nik", getNasabahByNik);
  router.delete("/nik/:nik", deleteNasabahByNik);

  return router;
}
