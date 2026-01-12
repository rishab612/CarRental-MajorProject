import React, { useEffect } from 'react'
import { useAppContext } from '../context/AppContext'
import CarCard from '../components/CarCard'
import { useNavigate } from 'react-router-dom'

const Wishlist = () => {

    const { wishlist, user, fetchWishlist } = useAppContext()
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetchWishlist()
        }
    }, [user])

    if (!user) {
        return (
            <div className='min-h-[60vh] flex flex-col items-center justify-center gap-4'>
                <h2 className='text-2xl font-semibold text-gray-700'>Please Login</h2>
                <p className='text-gray-500'>You need to be logged in to view your wishlist.</p>
                <button onClick={() => navigate('/login')} className='bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dull transition-all'>Login Now</button>
            </div>
        )
    }

    return (
        <div className='min-h-screen container mx-auto px-4 py-8 mt-20'>
            <h1 className='text-3xl font-bold text-gray-800 mb-8'>My Wishlist</h1>

            {wishlist && wishlist.length > 0 ? (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {wishlist.map((car, index) => (
                        <CarCard key={index} car={car} />
                    ))}
                </div>
            ) : (
                <div className='mt-20 flex flex-col items-center justify-center text-center gap-4'>
                    <p className='text-xl text-gray-500'>Your wishlist is empty.</p>
                    <button onClick={() => navigate('/cars')} className='text-primary hover:underline'>Browse Cars to Add</button>
                </div>
            )}
        </div>
    )
}

export default Wishlist
