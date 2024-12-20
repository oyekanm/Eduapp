'use client';
import { useState } from 'react';
import { MapPin, School, Users, Clock } from 'lucide-react';

export default function CenterRegistration() {
  const [formData, setFormData] = useState({
    centerName: '',
    address: '',
    latitude: '',
    longitude: '',
    capacity: '',
    operatingHours: {
      start: '08:00',
      end: '17:00'
    },
    facilities: [],
    description: '',
    ownerName: '',
    ownerPhone: '',
    ownerEmail: '',
    registrationNumber: '',
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-6">
            <School className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold">Register Teaching Center</h1>
          </div>

          <form className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Basic Information</h2>
              
              <div>
                <label className="block text-sm font-medium mb-2">Center Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={formData.centerName}
                  onChange={e => setFormData({...formData, centerName: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Address</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg"
                  rows={3}
                  value={formData.address}
                  onChange={e => setFormData({...formData, address: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Latitude</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg"
                    value={formData.latitude}
                    onChange={e => setFormData({...formData, latitude: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Longitude</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg"
                    value={formData.longitude}
                    onChange={e => setFormData({...formData, longitude: e.target.value})}
                  />
                </div>
              </div>
            </div>

            {/* Capacity & Hours */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Capacity & Hours</h2>
              
              <div>
                <label className="block text-sm font-medium mb-2">Student Capacity</label>
                <input
                  type="number"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={formData.capacity}
                  onChange={e => setFormData({...formData, capacity: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Opening Time</label>
                  <input
                    type="time"
                    className="w-full px-4 py-2 border rounded-lg"
                    value={formData.operatingHours.start}
                    onChange={e => setFormData({
                      ...formData, 
                      operatingHours: {...formData.operatingHours, start: e.target.value}
                    })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Closing Time</label>
                  <input
                    type="time"
                    className="w-full px-4 py-2 border rounded-lg"
                    value={formData.operatingHours.end}
                    onChange={e => setFormData({
                      ...formData, 
                      operatingHours: {...formData.operatingHours, end: e.target.value}
                    })}
                  />
                </div>
              </div>
            </div>

            {/* Owner Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Owner Information</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Owner Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg"
                    value={formData.ownerName}
                    onChange={e => setFormData({...formData, ownerName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border rounded-lg"
                    value={formData.ownerPhone}
                    onChange={e => setFormData({...formData, ownerPhone: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={formData.ownerEmail}
                  onChange={e => setFormData({...formData, ownerEmail: e.target.value})}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700"
            >
              Register Center
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}