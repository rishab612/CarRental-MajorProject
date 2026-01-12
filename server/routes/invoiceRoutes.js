import express from 'express'
import Booking from '../models/Booking.js'
import { generateInvoice } from '../utils/generateInvoice.js'

const router = express.Router()

router.get('/:bookingId', async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.bookingId)
      .populate('car')

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' })
    }

    generateInvoice(res, {
      bookingId: booking._id,
      fullName: booking.fullName,
      carName: `${booking.car.brand} ${booking.car.model}`,
      pickupDate: booking.pickupDate,
      returnDate: booking.returnDate,
      pickupLocation: booking.pickupLocation,
      paymentId: booking.razorpay_payment_id,
      days: booking.totalDays,
      pricePerDay: booking.car.pricePerDay,
      amount: booking.totalAmount
    })

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

export default router
