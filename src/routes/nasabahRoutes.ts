import {
  createNasabah,
  deleteNasabah,
  getAllNasabah,
  getNasabahById,
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

  return router;
}
