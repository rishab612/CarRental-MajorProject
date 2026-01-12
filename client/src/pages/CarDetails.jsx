import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { assets } from '../assets/assets'
import Loader from '../components/Loader'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'
import { motion } from 'motion/react'

const CarDetails = () => {

  const { id } = useParams()
  const { cars, axios, pickupDate, setPickupDate, returnDate, setReturnDate } = useAppContext()
  const navigate = useNavigate()
  const currency = import.meta.env.VITE_CURRENCY

  const [car, setCar] = useState(null)

  /* ================= USER DETAILS ================= */
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [age, setAge] = useState('')
  const [pickupLocation, setPickupLocation] = useState('')

  /* ================= LICENSE ================= */
  const [licenseFront, setLicenseFront] = useState(null)
  const [licenseBack, setLicenseBack] = useState(null)
  const [frontPreview, setFrontPreview] = useState(null)
  const [backPreview, setBackPreview] = useState(null)
  const [ocrVerified, setOcrVerified] = useState(false)
  const [verifyingOCR, setVerifyingOCR] = useState(false)

  /* ================= INVOICE ================= */
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [invoiceRef, setInvoiceRef] = useState(null)

  /* ================= OCR (SIMULATED) ================= */
  const verifyOCR = () => {
    setVerifyingOCR(true)
    setTimeout(() => {
      setVerifyingOCR(false)
      setOcrVerified(true)
      toast.success('Driving license verified successfully')
    }, 2000)
  }

  /* ================= INSURANCE ================= */
  const [selectedInsurance, setSelectedInsurance] = useState('Basic')
  const insurancePlans = [
    { name: 'Basic', price: 0 },
    { name: 'Standard', price: 499 },
    { name: 'Zero Dep', price: 999 }
  ]

  /* ================= PAYMENT + BOOKING ================= */
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!fullName || !email || !phone)
      return toast.error('Name, email and phone are required')

    if (!age || age < 18)
      return toast.error('Age must be 18 or above')

    if (!pickupLocation)
      return toast.error('Pickup location required')

    if (!licenseFront || !licenseBack)
      return toast.error('Upload both sides of license')

    if (!ocrVerified)
      return toast.error('License not verified')

    if (!pickupDate || !returnDate)
      return toast.error('Select pickup & return dates')

    const days = Math.ceil(
      (new Date(returnDate) - new Date(pickupDate)) / (1000 * 60 * 60 * 24)
    )

    if (days <= 0)
      return toast.error('Invalid booking dates')

    const insurancePrice = insurancePlans.find(p => p.name === selectedInsurance).price
    const amount = days * (car.pricePerDay + insurancePrice)

    try {
      const { data } = await axios.post('/api/payment/create-order', { amount })

      const options = {
        key: 'rzp_test_S2gdLhA0wE3sy1',
        amount: data.order.amount,
        currency: 'INR',
        name: 'Zoom Ride',
        description: `${days} day(s) car booking with ${selectedInsurance} insurance`,
        order_id: data.order.id,

        prefill: {
          name: fullName,
          email: email,
          contact: phone
        },

        handler: async (response) => {
          toast.loading('Processing booking...', { id: 'booking' })

          const formData = new FormData()
          formData.append('car', id)
          formData.append('fullName', fullName)
          formData.append('email', email)
          formData.append('phone', phone)
          formData.append('age', age)
          formData.append('pickupLocation', pickupLocation)
          formData.append('pickupDate', pickupDate)
          formData.append('returnDate', returnDate)
          formData.append('insurancePlan', selectedInsurance)
          formData.append('licenseFront', licenseFront)
          formData.append('licenseBack', licenseBack)
          formData.append('razorpay_payment_id', response.razorpay_payment_id)

          const booking = await axios.post('/api/bookings/create', formData)

          toast.success('Payment successful! Invoice ready.', { id: 'booking' })
          setPaymentSuccess(true)
          setInvoiceRef(booking.data.booking._id)
        },
        theme: { color: '#2563eb' }
      }

      new window.Razorpay(options).open()

    } catch (error) {
      toast.error(error.message)
    }
  }

  /* ================= DIRECT PDF DOWNLOAD ================= */
  const downloadInvoice = async () => {
    const res = await fetch(`/api/invoice/${invoiceRef}`)
    const blob = await res.blob()
    const url = window.URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = `ZoomRide_Invoice_${invoiceRef}.pdf`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  useEffect(() => {
    setCar(cars.find(c => c._id === id))
  }, [cars, id])

  return car ? (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16">

      <button onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 text-gray-500">
        <img src={assets.arrow_icon} className="rotate-180 opacity-60" />
        Back to all cars
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* ================= LEFT SIDE ================= */}
        <motion.div className="lg:col-span-2">
          <img src={car.image} className="w-full rounded-xl mb-6 shadow-md" />

          <h1 className="text-3xl font-bold">{car.brand} {car.model}</h1>
          <p className="text-gray-500 text-lg">{car.category} • {car.year}</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
            {[
              { icon: assets.users_icon, text: `${car.seating_capacity} Seats` },
              { icon: assets.fuel_icon, text: car.fuel_type },
              { icon: assets.car_icon, text: car.transmission },
              { icon: assets.location_icon, text: car.location }
            ].map(({ icon, text }) => (
              <div key={text}
                className="flex flex-col items-center bg-light p-4 rounded-lg">
                <img src={icon} className="h-5 mb-2" />
                {text}
              </div>
            ))}
          </div>

          <h2 className="text-xl font-medium mb-2">Description</h2>
          <p className="text-gray-500 mb-6">{car.description}</p>

          <h2 className="text-xl font-medium mb-2">Features</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {['360 Camera', 'Bluetooth', 'GPS', 'Heated Seats', 'Rear View Mirror']
              .map(f => (
                <li key={f} className="flex items-center text-gray-500">
                  <img src={assets.check_icon} className="h-4 mr-2" />
                  {f}
                </li>
              ))}
          </ul>
        </motion.div>

        {/* ================= RIGHT FORM ================= */}
        <motion.form onSubmit={handleSubmit}
          className="shadow-lg sticky top-18 rounded-xl p-6 space-y-4 text-gray-500">

          <p className="text-2xl font-semibold text-gray-800">
            {currency}{car.pricePerDay} / day
          </p>

          <input className="border p-2 rounded" placeholder="Full Name" value={fullName} onChange={e => setFullName(e.target.value)} />
          <input className="border p-2 rounded" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <input className="border p-2 rounded" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
          <input className="border p-2 rounded" type="number" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
          <input className="border p-2 rounded" placeholder="Pickup Location" value={pickupLocation} onChange={e => setPickupLocation(e.target.value)} />

          {/* LICENSE UPLOAD */}
          <div className="grid grid-cols-2 gap-3">
            <label className="border p-2 rounded cursor-pointer text-center">
              Upload License Front
              <input hidden type="file" accept="image/*"
                onChange={e => {
                  setLicenseFront(e.target.files[0])
                  setFrontPreview(URL.createObjectURL(e.target.files[0]))
                }} />
            </label>

            <label className="border p-2 rounded cursor-pointer text-center">
              Upload License Back
              <input hidden type="file" accept="image/*"
                onChange={e => {
                  setLicenseBack(e.target.files[0])
                  setBackPreview(URL.createObjectURL(e.target.files[0]))
                }} />
            </label>
          </div>

          {(frontPreview || backPreview) && (
            <div className="grid grid-cols-2 gap-3">
              {frontPreview && <img src={frontPreview} className="h-24 rounded object-cover" />}
              {backPreview && <img src={backPreview} className="h-24 rounded object-cover" />}
            </div>
          )}

          {!ocrVerified && licenseFront && licenseBack && (
            <button type="button" onClick={verifyOCR}
              className="w-full border py-2 rounded">
              {verifyingOCR ? 'Verifying License...' : 'Verify License'}
            </button>
          )}

          {ocrVerified && (
            <p className="text-green-600 text-sm text-center">✔ License verified</p>
          )}

          <input type="date" className="border p-2 rounded"
            value={pickupDate} onChange={e => setPickupDate(e.target.value)} />

          <input type="date" className="border p-2 rounded"
            value={returnDate} onChange={e => setReturnDate(e.target.value)} />

          {/* INSURANCE SELECTION */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-gray-700">Insurance Plan</label>
              <button type="button" onClick={() => navigate('/insurance')} className="text-xs text-blue-600 hover:underline">Compare Plans</button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {insurancePlans.map(plan => (
                <button
                  key={plan.name}
                  type="button"
                  onClick={() => setSelectedInsurance(plan.name)}
                  className={`py-2 px-1 rounded-lg border text-sm transition-all ${selectedInsurance === plan.name ? 'border-blue-600 bg-blue-50 text-blue-700 font-medium' : 'border-gray-200 hover:border-gray-300'}`}
                >
                  {plan.name}
                  <span className="block text-[10px] opacity-70">
                    {plan.price === 0 ? 'Free' : `+${currency}${plan.price}`}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100">
            <div className="flex justify-between text-gray-800 font-bold text-lg">
              <span>Total Amount</span>
              <span>
                {pickupDate && returnDate && car ? (
                  <>
                    {currency}
                    {Math.max(1, Math.ceil((new Date(returnDate) - new Date(pickupDate)) / (1000 * 60 * 60 * 24))) *
                      (car.pricePerDay + insurancePlans.find(p => p.name === selectedInsurance).price)}
                  </>
                ) : `${currency}${car.pricePerDay}`}
              </span>
            </div>
            <p className="text-[10px] text-gray-400 mt-1">
              * Includes base fare + {selectedInsurance} insurance
            </p>
          </div>

          <button className="w-full bg-primary py-3 text-white rounded-xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95">
            Book Now & Pay
          </button>

          {paymentSuccess && (
            <button type="button"
              onClick={downloadInvoice}
              className="w-full border border-primary text-primary py-2 rounded-xl">
              Download Invoice (PDF)
            </button>
          )}
        </motion.form>
      </div>
    </div>
  ) : <Loader />
}

export default CarDetails
