import React from 'react';
import { Users, BookOpen, Zap, Globe, Award, Heart } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Skill Exchange",
      description: "Share your skills and learn something new. Exchange skills directly with each other."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Free Learning",
      description: "Acquire new skills without spending money. Just share your knowledge."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Community",
      description: "Connect and learn with people from around the world."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Quick Matching",
      description: "Quickly connect with the right people according to your needs."
    }
  ];

  const stats = [
    { number: "10K+", label: "Active Users" },
    { number: "50+", label: "Different Skills" },
    { number: "5K+", label: "Successful Swaps" },
    { number: "4.8", label: "Rating" }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            SkillSwap
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Share Your Skills, Learn Something New - Completely Free
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16">
          <div className="flex items-center justify-center mb-6">
            <Award className="w-12 h-12 text-purple-600" />
          </div>
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Our Mission</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
            SkillSwap is a unique platform where people can exchange their skills with each other. 
            We believe that everyone has something to teach and so much to learn. 
            Our platform is a simple medium for spreading knowledge and skills without money.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why SkillSwap?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-linear-to-r from-blue-500 to-purple-600 rounded-3xl shadow-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Sign Up</h3>
              <p className="text-blue-100">Add your skills and what you want to learn</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Find Matches</h3>
              <p className="text-blue-100">Discover people who match your interests</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Started</h3>
              <p className="text-blue-100">Share skills and learn something new</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}