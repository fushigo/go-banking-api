import express from "express";
import {
  createLogActivity,
  getAllLogActivity,
  getLogActivityById,
} from "../controllers/logActivityController";

export default function logActivityRoutes() {
  const router = express.Router();

  router.get("/", getAllLogActivity);
  router.get(":/id", getLogActivityById);
  router.post("/", createLogActivity);

  return router;
}
