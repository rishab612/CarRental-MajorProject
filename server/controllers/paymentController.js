import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,      // rzp_test_...
  key_secret: process.env.RAZORPAY_SECRET   // ❌ NEVER frontend
});

export const createOrder = async (req, res) => {
  try {
    const { amount } = req.body;

    const order = await razorpay.orders.create({
      amount: amount * 100, // Razorpay uses paise
      currency: "INR",
      receipt: "car_booking_" + Date.now()
    });

    res.json({
      success: true,
      order
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
