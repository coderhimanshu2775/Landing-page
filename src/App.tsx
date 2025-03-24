import React, { useState } from 'react';
import { Book, Code, Monitor, CheckCircle } from 'lucide-react';

const SoftwareTestingLandingPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const courseFeatures = [
    {
      icon: <Book className="w-12 h-12 text-blue-600" />,
      title: "Comprehensive eBook",
      description: "Dive deep into software testing with our 300-page comprehensive eBook covering everything from basics to advanced techniques."
    },
    {
      icon: <Code className="w-12 h-12 text-green-600" />,
      title: "Practical Coding",
      description: "Learn hands-on testing methodologies with real-world coding examples and interactive programming exercises."
    },
    {
      icon: <Monitor className="w-12 h-12 text-purple-600" />,
      title: "Video Tutorials",
      description: "Access 50+ hours of high-quality video content with step-by-step demonstrations of testing strategies."
    }
  ];

  const courseContent = {
    overview: (
      <div className="bg-white/80 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Course Overview</h2>
        <p className="text-gray-700">
          Master the art of software testing with our comprehensive course. From manual to automated testing, 
          learn industry-standard techniques that transform you into a top-tier quality assurance professional.
        </p>
      </div>
    ),
    ebook: (
      <div className="bg-white/80 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-green-800">eBook Highlights</h2>
        <ul className="space-y-3 text-gray-700">
          <li>✓ Comprehensive coverage of testing methodologies</li>
          <li>✓ Practical case studies and real-world scenarios</li>
          <li>✓ Latest industry testing trends and tools</li>
          <li>✓ Detailed explanations of testing frameworks</li>
        </ul>
      </div>
    ),
    methods: (
      <div className="bg-white/80 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">Testing Methods</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Manual Testing</h3>
            <p className="text-gray-700">Comprehensive techniques for thorough manual software evaluation.</p>
          </div>
          <div>
            <h3 className="font-semibold">Automated Testing</h3>
            <p className="text-gray-700">Advanced automation strategies using leading tools and frameworks.</p>
          </div>
        </div>
      </div>
    )
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 relative overflow-hidden">
      {/* 3D Floating Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-300 opacity-30 rounded-full animate-float"></div>
        <div className="absolute bottom-40 right-40 w-48 h-48 bg-purple-300 opacity-30 rounded-full animate-float-slow"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-blue-900 mb-4">
            Master Software Testing
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            A comprehensive course to elevate your software quality assurance skills
          </p>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {courseFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 text-center shadow-lg transform transition hover:scale-105"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Interactive Content Tabs */}
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center space-x-4 mb-8">
            {['overview', 'ebook', 'methods'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full transition ${
                  activeTab === tab 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-blue-600 hover:bg-blue-100'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {courseContent[activeTab]}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-blue-700 transition transform hover:scale-105 shadow-lg">
            Enroll Now
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SoftwareTestingLandingPage;