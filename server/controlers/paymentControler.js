// server/controllers/paymentController.js
import midtransClient from "midtrans-client";
import dotenv from "dotenv";
dotenv.config();

const snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY,
});

export const createTransaction = async (req, res) => {
  const { orderId, grossAmount } = req.body;

  const parameter = {
    transaction_details: {
      order_id: orderId,
      gross_amount: grossAmount,
    },
  };

  try {
    const transaction = await snap.createTransaction(parameter);
    res.json({ redirect_url: transaction.redirect_url });
  } catch (error) {
    console.error("Midtrans error:", error);
    res.status(500).json({ message: "Failed to create transaction" });
  }
};
