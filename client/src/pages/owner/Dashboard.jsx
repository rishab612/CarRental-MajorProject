import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import Title from '../../components/owner/Title';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';

import jsPDF from 'jspdf';
import 'jspdf-autotable';

const Dashboard = () => {
  const { axios, isOwner, currency } = useAppContext();

  // ✅ SAFE INITIAL STATE
  const [data, setData] = useState({
    totalCars: 0,
    totalBookings: 0,
    pendingBookings: 0,
    completedBookings: 0,
    recentBookings: [],
    monthlyRevenue: 0,
    revenueByMonth: []
  });

  const dashboardCards = [
    { title: "Total Cars", value: data.totalCars, icon: assets.carIconColored },
    { title: "Total Bookings", value: data.totalBookings, icon: assets.listIconColored },
    { title: "Pending", value: data.pendingBookings, icon: assets.cautionIconColored },
    { title: "Confirmed", value: data.completedBookings, icon: assets.listIconColored }
  ];

  const fetchDashboardData = async () => {
    try {
      const res = await axios.get('/api/owner/dashboard');
      if (res.data.success) {
        setData({
          totalCars: res.data.dashboardData.totalCars || 0,
          totalBookings: res.data.dashboardData.totalBookings || 0,
          pendingBookings: res.data.dashboardData.pendingBookings || 0,
          completedBookings: res.data.dashboardData.completedBookings || 0,
          recentBookings: res.data.dashboardData.recentBookings || [],
          monthlyRevenue: res.data.dashboardData.monthlyRevenue || 0,
          revenueByMonth: res.data.dashboardData.revenueByMonth || []
        });
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Failed to load dashboard");
    }
  };

  useEffect(() => {
    if (isOwner) fetchDashboardData();
  }, [isOwner]);

  /* ================= SAFE GROWTH ================= */
  const revenueLen = data.revenueByMonth.length;
  const growth =
    revenueLen >= 2 && data.revenueByMonth[revenueLen - 2].revenue !== 0
      ? (
          ((data.revenueByMonth[revenueLen - 1].revenue -
            data.revenueByMonth[revenueLen - 2].revenue) /
            data.revenueByMonth[revenueLen - 2].revenue) *
          100
        ).toFixed(1)
      : 0;

  /* ================= PDF ================= */
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text('Owner Revenue Report', 14, 15);

    doc.autoTable({
      startY: 25,
      head: [['Month', 'Revenue']],
      body: data.revenueByMonth.map(item => [
        item.month,
        `${currency}${item.revenue}`
      ])
    });

    doc.save('dashboard-report.pdf');
  };

  return (
    <div className="px-4 pt-10 md:px-10 flex-1">
      <Title
        title="Admin Dashboard"
        subTitle="Monitor revenue, growth, bookings, and performance"
      />

      {/* ================= KPI CARDS (WITH ICONS) ================= */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 max-w-3xl">
        {dashboardCards.map((card, index) => (
          <div
            key={index}
            className="flex gap-2 items-center justify-between p-4 rounded-md border border-borderColor"
          >
            <div>
              <h1 className="text-xs text-gray-500">{card.title}</h1>
              <p className="text-lg font-semibold">{card.value}</p>
            </div>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
              <img src={card.icon} alt="" className="h-4 w-4" />
            </div>
          </div>
        ))}
      </div>

      {/* ================= ANALYTICS ================= */}
      <div className="grid lg:grid-cols-3 gap-6 mb-8 w-full">
        {/* REVENUE GRAPH */}
        <div className="lg:col-span-2 p-6 border border-borderColor rounded-md">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-medium">Revenue Growth</h2>
            <span
              className={`text-sm font-medium ${
                growth >= 0 ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {growth}% Growth
            </span>
          </div>

          {/* FIXED HEIGHT */}
          <div style={{ width: '100%', height: 320 }}>
            <ResponsiveContainer>
              <LineChart data={data.revenueByMonth}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#2563eb"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* BOOKING STATUS */}
        <div className="p-6 border border-borderColor rounded-md">
          <h2 className="text-lg font-medium mb-4">Booking Status</h2>

          <div style={{ width: '100%', height: 260 }}>
            <ResponsiveContainer>
              <BarChart
                data={[
                  { name: 'Pending', value: data.pendingBookings },
                  { name: 'Confirmed', value: data.completedBookings }
                ]}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#2563eb" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM SECTION ================= */}
      <div className="flex flex-wrap gap-6">
        {/* MONTHLY REVENUE */}
        <div className="p-6 border border-borderColor rounded-md w-full md:max-w-xs">
          <h2 className="text-lg font-medium">Monthly Revenue</h2>
          <p className="text-3xl mt-4 font-semibold text-primary">
            {currency}{data.monthlyRevenue}
          </p>

          <button
            onClick={downloadPDF}
            className="mt-6 w-full bg-primary text-white py-2 rounded-md"
          >
            Download PDF Report
          </button>
        </div>

        {/* RECENT BOOKINGS */}
        <div className="p-6 border border-borderColor rounded-md max-w-lg w-full">
          <h2 className="text-lg font-medium">Recent Bookings</h2>
          <p className="text-gray-500 text-sm">Latest customer bookings</p>

          {data.recentBookings.length === 0 && (
            <p className="text-gray-400 text-sm mt-4">
              No recent bookings
            </p>
          )}

          {data.recentBookings.map((booking, index) => (
            <div
              key={index}
              className="mt-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <img
                    src={assets.listIconColored}
                    alt=""
                    className="h-5 w-5"
                  />
                </div>
                <div>
                  <p>
                    {booking.car?.brand} {booking.car?.model}
                  </p>
                  <p className="text-sm text-gray-500">
                    {booking.createdAt?.split('T')[0]}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 font-medium">
                <p className="text-sm text-gray-500">
                  {currency}{booking.price}
                </p>
                <p className="px-3 py-0.5 border border-borderColor rounded-full text-sm">
                  {booking.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
