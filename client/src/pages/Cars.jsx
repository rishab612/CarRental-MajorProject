import React, { useEffect, useState } from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CarCard from '../components/CarCard';
import { useSearchParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';
import { motion } from 'motion/react';

const Cars = () => {
  const [searchParams] = useSearchParams();
  const pickupLocation = searchParams.get('pickupLocation');
  const pickupDate = searchParams.get('pickupDate');
  const returnDate = searchParams.get('returnDate');

  const { cars, axios } = useAppContext();

  const [input, setInput] = useState('');
  const [filteredCars, setFilteredCars] = useState([]);

  // FILTER STATES
  const [showFilter, setShowFilter] = useState(false);
  const [sortPrice, setSortPrice] = useState('');
  const [availability, setAvailability] = useState('');
  const [transmission, setTransmission] = useState([]);
  const [fuelType, setFuelType] = useState([]);
  const [carType, setCarType] = useState([]);

  const isSearchData = pickupLocation && pickupDate && returnDate;

  // SEARCH + FILTER LOGIC
  const applyFilters = () => {
    let result = [...cars];

    // Search input
    if (input) {
      result = result.filter(car =>
        car.brand.toLowerCase().includes(input.toLowerCase()) ||
        car.model.toLowerCase().includes(input.toLowerCase()) ||
        car.category.toLowerCase().includes(input.toLowerCase())
      );
    }

    // Availability
    if (availability === 'available') {
      result = result.filter(car => car.isAvailable);
    }
    if (availability === 'unavailable') {
      result = result.filter(car => !car.isAvailable);
    }

    // Transmission
    if (transmission.length) {
      result = result.filter(car =>
        transmission.includes(car.transmission)
      );
    }

    // Fuel type
    if (fuelType.length) {
      result = result.filter(car =>
        fuelType.includes(car.fuelType)
      );
    }

    // Car type
    if (carType.length) {
      result = result.filter(car =>
        carType.includes(car.type)
      );
    }

    // Sorting
    if (sortPrice === 'low-high') {
      result.sort((a, b) => a.price - b.price);
    }
    if (sortPrice === 'high-low') {
      result.sort((a, b) => b.price - a.price);
    }

    setFilteredCars(result);
  };

  // Availability API search
  const searchCarAvailability = async () => {
    const { data } = await axios.post('/api/bookings/check-availability', {
      location: pickupLocation,
      pickupDate,
      returnDate
    });

    if (data.success) {
      setFilteredCars(data.availableCars);
      if (!data.availableCars.length) toast('No cars available');
    }
  };

  useEffect(() => {
    isSearchData && searchCarAvailability();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [
    input,
    cars,
    sortPrice,
    availability,
    transmission,
    fuelType,
    carType
  ]);

  // Checkbox helper
  const toggleValue = (value, state, setState) => {
    setState(
      state.includes(value)
        ? state.filter(v => v !== value)
        : [...state, value]
    );
  };

  return (
    <div>
      <motion.div className="flex flex-col items-center py-20 bg-light max-md:px-4">
        <Title
          title="Available Cars"
          subTitle="Browse our selection of premium vehicles"
        />

        <div className="flex items-center bg-white px-4 mt-6 max-w-140 w-full h-12 rounded-full shadow">
          <img src={assets.search_icon} className="w-4.5 mr-2" />
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search by make, model, or features"
            className="w-full outline-none text-gray-500"
          />
          <img
            src={assets.filter_icon}
            className="w-4.5 ml-2 cursor-pointer"
            onClick={() => setShowFilter(!showFilter)}
          />
        </div>

        {/* FILTER PANEL */}
        {showFilter && (
          <div className="bg-white mt-4 p-4 rounded-lg shadow w-full max-w-140 text-sm">
            <p className="font-semibold mb-2">Sort by Price</p>
            <select
              className="border p-1 w-full mb-3"
              onChange={(e) => setSortPrice(e.target.value)}
            >
              <option value="">None</option>
              <option value="low-high">Low → High</option>
              <option value="high-low">High → Low</option>
            </select>

            <p className="font-semibold mb-2">Availability</p>
            <select
              className="border p-1 w-full mb-3"
              onChange={(e) => setAvailability(e.target.value)}
            >
              <option value="">All</option>
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
            </select>

            <p className="font-semibold">Transmission</p>
            {['Automatic', 'Semi-Automatic', 'Manual'].map(t => (
              <label key={t} className="block">
                <input type="checkbox"
                  onChange={() => toggleValue(t, transmission, setTransmission)} /> {t}
              </label>
            ))}

            <p className="font-semibold mt-3">Fuel Type</p>
            {['Petrol', 'Diesel', 'Electric', 'Hybrid', 'Gas'].map(f => (
              <label key={f} className="block">
                <input type="checkbox"
                  onChange={() => toggleValue(f, fuelType, setFuelType)} /> {f}
              </label>
            ))}

            <p className="font-semibold mt-3">Car Type</p>
            {['Sedan', 'SUV', 'Van', 'Hatchback', 'Coupe', 'Convertible'].map(c => (
              <label key={c} className="block">
                <input type="checkbox"
                  onChange={() => toggleValue(c, carType, setCarType)} /> {c}
              </label>
            ))}
          </div>
        )}
      </motion.div>

      <div className="px-6 md:px-16 mt-10">
        <p className="text-gray-500">Showing {filteredCars.length} Cars</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {filteredCars.map((car, index) => (
            <motion.div key={index}>
              <CarCard car={car} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
