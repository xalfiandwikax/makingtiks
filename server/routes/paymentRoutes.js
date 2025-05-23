// server/routes/paymentRoutes.js
import express from "express";
import {
  createTransaction,
  handleNotification,
  checkPaymentStatus,
} from "../controlers/paymentControler.js";  // pastikan ini sama persis


const router = express.Router();

router.post("/create", createTransaction);

router.post("/notification", handleNotification);

router.get("/status/:orderId", checkPaymentStatus);

export default router;
