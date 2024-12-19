import express from "express";
import {
  createRekeningActivity,
  getAllRekeningActivity,
  getRekeningActivityById,
} from "../controllers/rekeningActivityController";

export default function rekeningActivityRoutes() {
  const router = express.Router();

  router.get("/", getAllRekeningActivity);
  router.get("/:id", getRekeningActivityById);
  router.post("/", createRekeningActivity);

  return router;
}
