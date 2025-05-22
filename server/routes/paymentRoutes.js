// server/routes/paymentRoutes.js
import express from "express";
import { createTransaction } from "../controlers/paymentControler.js";

const router = express.Router();

router.post("/create", createTransaction);

export default router;
