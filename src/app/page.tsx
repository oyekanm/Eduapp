
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, MapPin, Users } from 'lucide-react';


const features = [
  {
    title: "Find Nearby Teachers",
    description: "Connect with qualified teachers within 1km of your location",
    icon: MapPin
  },
  {
    title: "Quality Education",
    description: "Verified teachers with proven track records",
    icon: BookOpen
  },
  {
    title: "Safe & Secure",
    description: "All teachers are thoroughly vetted and verified",
    icon: Users
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">
            Quality Education at Your Doorstep
          </h1>
          <p className="text-xl mb-8">
            Connect with qualified teachers in your neighborhood and give your children
            the education they deserve, without the commute.
          </p>
          <div className="space-x-4 grid gap-4  sm:block">
            <Link 
              href="/auth/register/parent"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold inline-flex items-center"
            >
              Register as a Parent
              <ArrowRight className="ml-2" />
            </Link>
            <Link
              href="/auth/register/teacher"
              className="border border-white px-6 py-3 rounded-lg font-semibold inline-flex items-center"
            >
              Become a Teacher
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/* Features Section */}
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Our Platform?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* How It Works Section */}
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Sign Up",
                description: "Create an account as a parent or teacher"
              },
              {
                step: "2",
                title: "Find or Get Found",
                description: "Search for teachers in your area or let parents find you"
              },
              {
                step: "3",
                title: "Start Learning",
                description: "Book sessions and start the learning journey"
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">
                  {item.step}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>

      )
}
