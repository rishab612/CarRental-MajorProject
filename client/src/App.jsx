import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import CarDetails from './pages/CarDetails'
import Cars from './pages/Cars'
import MyBookings from './pages/MyBookings'
import Footer from './components/Footer'
import Layout from './pages/owner/Layout'
import Dashboard from './pages/owner/Dashboard'
import AddCar from './pages/owner/AddCar'
import ManageCars from './pages/owner/ManageCars'
import ManageBookings from './pages/owner/ManageBookings'
import NewsletterManager from './pages/owner/NewsletterManager'
import OwnerProfile from './pages/owner/OwnerProfile'
import AboutUs from './pages/AboutUs'
import Insurance from './pages/Insurance'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import HelpCenter from './pages/HelpCenter'
import CookieConsent from './components/CookieConsent'
import Chatbot from './components/Chatbot'
import Login from './components/Login'
import { Toaster } from 'react-hot-toast'
import { useAppContext } from './context/AppContext'

const App = () => {

  const { showLogin } = useAppContext()
  const isOwnerPath = useLocation().pathname.startsWith('/owner')
  const [openCookieSettings, setOpenCookieSettings] = useState(false)

  return (
    <>
      <Toaster />
      {showLogin && <Login />}
      <CookieConsent openSettings={openCookieSettings} setOpenSettings={setOpenCookieSettings} />
      <Chatbot />

      {!isOwnerPath && <Navbar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/car-details/:id' element={<CarDetails />} />
        <Route path='/cars' element={<Cars />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/insurance' element={<Insurance />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
        <Route path='/tos' element={<TermsOfService />} />
        <Route path='/help-center' element={<HelpCenter />} />
        <Route path='/my-bookings' element={<MyBookings />} />
        <Route path='/owner' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-car" element={<AddCar />} />
          <Route path="manage-cars" element={<ManageCars />} />
          <Route path="manage-bookings" element={<ManageBookings />} />
          <Route path="newsletter" element={<NewsletterManager />} />
          <Route path="profile" element={<OwnerProfile />} />
        </Route>
      </Routes>

      {!isOwnerPath && <Footer openCookieSettings={() => setOpenCookieSettings(true)} />}

    </>
  )
}

export default App
