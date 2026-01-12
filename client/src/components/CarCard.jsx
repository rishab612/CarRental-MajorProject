import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const CarCard = ({ car }) => {

  const currency = import.meta.env.VITE_CURRENCY
  const navigate = useNavigate()

  return (
    <div onClick={() => { navigate(`/car-details/${car._id}`); scrollTo(0, 0) }} className='group rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-500 cursor-pointer'>

      <div className='relative h-48 overflow-hidden'>
        <img src={car.image} alt="Car Image" className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' />

        {car.isAvaliable && <p className='absolute top-4 left-4 bg-primary/90 text-white text-xs px-2.5 py-1 rounded-full'>Available Now</p>}

        <button
          onClick={(e) => {
            e.stopPropagation();
            const shareData = {
              title: `${car.brand} ${car.model}`,
              text: `Check out this ${car.brand} ${car.model} on Zoom Ride!`,
              url: `${window.location.origin}/car-details/${car._id}`
            };
            if (navigator.share) {
              navigator.share(shareData).catch(console.error);
            } else {
              navigator.clipboard.writeText(shareData.url).then(() => {
                toast.success('Link copied to clipboard!');
              });
            }
          }}
          className='absolute top-4 right-4 bg-white/90 text-gray-800 p-2 rounded-full shadow-sm hover:bg-white hover:shadow-md transition-all z-10'
          title="Share"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
        </button>

        <div className='absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg'>
          <span className='font-semibold'>{currency}{car.pricePerDay}</span>
          <span className='text-sm text-white/80'> / day</span>
        </div>
      </div>

      <div className='p-4 sm:p-5'>
        <div className='flex justify-between items-start mb-2'>
          <div>
            <h3 className='text-lg font-medium'>{car.brand} {car.model}</h3>
            <p className='text-muted-foreground text-sm'>{car.category} • {car.year}</p>
          </div>
        </div>

        <div className='mt-4 grid grid-cols-2 gap-y-2 text-gray-600'>
          <div className='flex items-center text-sm text-muted-foreground'>
            <img src={assets.users_icon} alt="" className='h-4 mr-2' />
            <span>{car.seating_capacity} Seats</span>
          </div>
          <div className='flex items-center text-sm text-muted-foreground'>
            <img src={assets.fuel_icon} alt="" className='h-4 mr-2' />
            <span>{car.fuel_type}</span>
          </div>
          <div className='flex items-center text-sm text-muted-foreground'>
            <img src={assets.car_icon} alt="" className='h-4 mr-2' />
            <span>{car.transmission}</span>
          </div>
          <div className='flex items-center text-sm text-muted-foreground'>
            <img src={assets.location_icon} alt="" className='h-4 mr-2' />
            <span>{car.location}</span>
          </div>
        </div>

      </div>

    </div>
  )
}

export default CarCard
