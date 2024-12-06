'use client';
import { useState, useEffect } from 'react';
import { Search, Filter, Star, MapPin } from 'lucide-react';



export default function TeacherSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    subject: '',
    maxPrice: '',
    minRating: '',
    maxDistance: '',
  });
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(true);


  const TeacherCard = ({ teacher }: { teacher: Teacher }) => (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold">
            {teacher.firstName} {teacher.lastName}
          </h3>
          <div className="flex items-center mt-1 text-gray-600">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{teacher.distance}km away</span>
          </div>
        </div>
        <div className="flex items-center">
          <Star className="w-4 h-4 text-yellow-400 mr-1" />
          <span>{teacher.rating}</span>
        </div>
      </div>
      
      <div className="mt-4">
        <div className="flex flex-wrap gap-2">
          {teacher.subjects.map((subject, index) => (
            <span 
              key={index}
              className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm"
            >
              {subject}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mt-4 flex items-center justify-between">
        <span className="text-lg font-semibold">
          ₦{teacher.hourlyRate}/hour
        </span>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Book Now
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full md:w-64 space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Filters</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <select 
                    className="w-full px-3 py-2 border rounded-lg"
                    value={filters.subject}
                    onChange={e => setFilters({...filters, subject: e.target.value})}
                  >
                    <option value="">All Subjects</option>
                    <option value="mathematics">Mathematics</option>
                    <option value="english">English</option>
                    <option value="science">Science</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Max Price (₦/hr)</label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border rounded-lg"
                    value={filters.maxPrice}
                    onChange={e => setFilters({...filters, maxPrice: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Minimum Rating</label>
                  <select 
                    className="w-full px-3 py-2 border rounded-lg"
                    value={filters.minRating}
                    onChange={e => setFilters({...filters, minRating: e.target.value})}
                  >
                    <option value="">Any Rating</option>
                    <option value="4">4+ Stars</option>
                    <option value="3">3+ Stars</option>
                    <option value="2">2+ Stars</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Max Distance (km)</label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border rounded-lg"
                    value={filters.maxDistance}
                    onChange={e => setFilters({...filters, maxDistance: e.target.value})}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search Bar */}
            <div className="bg-white rounded-lg shadow p-4 mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search teachers..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              {loading ? (
                <div className="text-center py-12">Loading...</div>
              ) : teachers.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600">No teachers found matching your criteria.</p>
                </div>
              ) : (
                teachers.map(teacher => (
                  <TeacherCard key={teacher.id} teacher={teacher} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}