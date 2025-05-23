// server/controllers/paymentController.js
import midtransClient from "midtrans-client";
import dotenv from "dotenv";

dotenv.config();

const snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY,
  clientKey: process.env.MIDTRANS_CLIENT_KEY,
});

export const createTransaction = async (req, res) => {
  try {
    const { orderId, grossAmount, customerDetails, itemDetails } = req.body;

    if (!orderId || !grossAmount) {
      return res.status(400).json({
        success: false,
        message: "Order ID dan jumlah pembayaran harus diisi",
      });
    }

    const parameter = {
      transaction_details: {
        order_id: orderId,
        gross_amount: grossAmount,
      },
      customer_details:
        customerDetails || {
          first_name: "Customer",
          email: "customer@example.com",
          phone: "08123456789",
        },
      item_details:
        itemDetails || [
          {
            id: "ITEM1",
            price: grossAmount,
            quantity: 1,
            name: "Tiket Event",
          },
        ],
      credit_card: {
        secure: true,
      },
    };

    const transaction = await snap.createTransaction(parameter);

    res.json({
      success: true,
      payment_url: transaction.redirect_url,
      token: transaction.token,
      order_id: orderId,
    });
  } catch (error) {
    console.error("Error creating transaction:", error);
    res.status(500).json({
      success: false,
      message: "Gagal membuat transaksi pembayaran",
      error: error.message,
    });
  }
};

export const handleNotification = async (req, res) => {
  try {
    const notification = req.body;

    const status = await snap.transaction.notification(notification);

    // TODO: Update status pembayaran di DB sesuai status.transaction_status
    console.log("Payment notification:", status);

    res.status(200).send("OK");
  } catch (error) {
    console.error("Error handling notification:", error);
    res.status(500).json({ error: error.message });
  }
};

export const checkPaymentStatus = async (req, res) => {
  try {
    const { orderId } = req.params;

    if (!orderId) {
      return res.status(400).json({ message: "Order ID harus disertakan" });
    }

    const status = await snap.transaction.status(orderId);

    res.json({
      success: true,
      status: status.transaction_status,
      data: status,
    });
  } catch (error) {
    console.error("Error checking payment status:", error);
    res.status(500).json({
      success: false,
      message: "Gagal memeriksa status pembayaran",
    });
  }
};
