import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import Title from '../../components/owner/Title';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const ManageCars = () => {
  const { isOwner, axios, currency } = useAppContext();

  const [cars, setCars] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [editCar, setEditCar] = useState(null);

  const fetchOwnerCars = async () => {
    try {
      const { data } = await axios.get('/api/owner/cars');
      if (data.success) setCars(data.cars);
      else toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    isOwner && fetchOwnerCars();
  }, [isOwner]);

  /* ================= ACTIONS ================= */

  const toggleAvailability = async (carId) => {
    try {
      const { data } = await axios.post('/api/owner/toggle-car', { carId });
      if (data.success) {
        toast.success(data.message);
        fetchOwnerCars();
      } else toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const deleteCar = async (carId) => {
    if (!window.confirm('Are you sure you want to delete this car?')) return;

    try {
      const { data } = await axios.post('/api/owner/delete-car', { carId });
      if (data.success) {
        toast.success(data.message);
        fetchOwnerCars();
      } else toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const openEditModal = (car) => {
    setEditCar({ ...car });
    setShowEdit(true);
  };

  const updateCar = async () => {
    try {
      const { data } = await axios.post('/api/owner/update-car', {
        carId: editCar._id,
        brand: editCar.brand,
        model: editCar.model,
        category: editCar.category,
        pricePerDay: editCar.pricePerDay,
        transmission: editCar.transmission,
        seating_capacity: editCar.seating_capacity,
        fuelType: editCar.fuelType
      });

      if (data.success) {
        toast.success('Car updated successfully');
        setShowEdit(false);
        fetchOwnerCars();
      } else toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="px-4 pt-10 md:px-10 w-full">
      <Title
        title="Manage Cars"
        subTitle="View, edit, update availability, or remove cars from the platform"
      />

      <div className="max-w-4xl w-full rounded-md overflow-hidden border border-borderColor mt-6">
        <table className="w-full border-collapse text-left text-sm text-gray-600">
          <thead className="text-gray-500">
            <tr>
              <th className="p-3">Car</th>
              <th className="p-3 max-md:hidden">Category</th>
              <th className="p-3">Price</th>
              <th className="p-3 max-md:hidden">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {cars.map((car, index) => (
              <tr key={index} className="border-t border-borderColor">
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={car.image}
                    alt=""
                    className="h-12 w-12 rounded-md object-cover"
                  />
                  <div className="max-md:hidden">
                    <p className="font-medium">
                      {car.brand} {car.model}
                    </p>
                    <p className="text-xs text-gray-500">
                      {car.seating_capacity} • {car.transmission}
                    </p>
                  </div>
                </td>

                <td className="p-3 max-md:hidden">{car.category}</td>
                <td className="p-3">{currency}{car.pricePerDay}/day</td>

                <td className="p-3 max-md:hidden">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      car.isAvaliable
                        ? 'bg-green-100 text-green-600'
                        : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {car.isAvaliable ? 'Available' : 'Unavailable'}
                  </span>
                </td>

               <td className="p-3">
  <div className="flex items-center gap-3">
    
    {/* Edit */}
    <img
      src={assets.icons8_edit_32}
      alt="Edit"
      className="w-4 h-4 cursor-pointer opacity-80 hover:opacity-100"
      onClick={() => openEditModal(car)}
    />

    {/* Toggle availability */}
    <img
      src={car.isAvaliable ? assets.eye_close_icon : assets.eye_icon}
      alt="Toggle"
      className="w-9 h-9 cursor-pointer opacity-80 hover:opacity-100"
      onClick={() => toggleAvailability(car._id)}
    />

    {/* Delete */}
    <img
      src={assets.delete_icon}
      alt="Delete"
      className="w-9 h-9 cursor-pointer opacity-80 hover:opacity-100"
      onClick={() => deleteCar(car._id)}
    />
    
  </div>
</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= EDIT MODAL ================= */}
      {showEdit && editCar && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md w-96">
            <h2 className="text-lg font-medium mb-4">Edit Car Details</h2>

            {[
              ['Brand', 'brand'],
              ['Model', 'model'],
              ['Category', 'category'],
              ['Price / Day', 'pricePerDay'],
              ['Transmission', 'transmission'],
              ['Seating', 'seating_capacity'],
              ['Fuel Type', 'fuelType']
            ].map(([label, key]) => (
              <div key={key} className="mb-2">
                <label className="text-sm">{label}</label>
                <input
                  value={editCar[key]}
                  onChange={(e) =>
                    setEditCar({ ...editCar, [key]: e.target.value })
                  }
                  className="w-full border p-2 rounded"
                />
              </div>
            ))}

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setShowEdit(false)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={updateCar}
                className="px-4 py-2 bg-primary text-white rounded"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageCars;
