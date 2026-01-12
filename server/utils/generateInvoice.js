import PDFDocument from 'pdfkit'

export const generateInvoice = (res, invoiceData) => {
  const doc = new PDFDocument({ margin: 50 })

  res.setHeader('Content-Type', 'application/pdf')
  res.setHeader(
    'Content-Disposition',
    `attachment; filename=invoice-${invoiceData.bookingId}.pdf`
  )

  doc.pipe(res)

  // ===== HEADER =====
  doc.fontSize(22).text('Zoom Ride', { align: 'center' })
  doc.fontSize(10).text('Car Rental Invoice', { align: 'center' })
  doc.moveDown(2)

  // ===== CUSTOMER =====
  doc.fontSize(12).text(`Customer Name: ${invoiceData.fullName}`)
  doc.text(`Car: ${invoiceData.carName}`)
  doc.text(`Pickup Date: ${invoiceData.pickupDate}`)
  doc.text(`Return Date: ${invoiceData.returnDate}`)
  doc.text(`Pickup Location: ${invoiceData.pickupLocation}`)
  doc.moveDown()

  // ===== PAYMENT =====
  doc.text(`Payment ID: ${invoiceData.paymentId}`)
  doc.text(`Total Days: ${invoiceData.days}`)
  doc.text(`Price Per Day: ₹${invoiceData.pricePerDay}`)
  doc.moveDown()

  doc.fontSize(14).text(`Total Amount Paid: ₹${invoiceData.amount}`, {
    align: 'right'
  })

  doc.moveDown(3)
  doc.fontSize(10).text('Thank you for choosing Zoom Ride 🚗', {
    align: 'center'
  })

  doc.end()
}
