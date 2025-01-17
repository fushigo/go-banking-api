import express from "express";
import {
  createKaryawan,
  deleteKaryawan,
  getAllKaryawan,
  getKaryawanById,
  updateKaryawan,
  updateKaryawanByNomorKaryawan,
} from "../controllers/karyawanController";

export default function karyawanRoutes() {
  const router = express.Router();

  router.get("/", getAllKaryawan);
  router.get("/:id", getKaryawanById);
  router.post("/", createKaryawan);
  router.patch("/nmkaryawan/:nomor", updateKaryawanByNomorKaryawan);
  router.patch("/:id", updateKaryawan);
  router.delete("/:id", deleteKaryawan);

  return router;
}
