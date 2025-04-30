// src/components/InfoSection.jsx
import React from 'react';
import customber from '../assets/customer-service.png';
import newMember from '../assets/team-member.png';
import brandAmbassador from '../assets/ambassador.png';
import downloadAndroid from '../assets/application.png';

const InfoSection = () => {
  return (
    <section className="bg-slate-900 text-white py-12">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Customer Support */}
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-orange-500 p-4 rounded-full">
            <img
              src={customber}
              alt="Customer Support"
              className="w-16 h-16"
            />
          </div>
          <h3 className="text-xl font-semibold">Customer Support</h3>
          <p className="text-sm text-center">Available 24/7 to assist you</p>
        </div>

        {/* New Member Guide */}
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-orange-500 p-4 rounded-full">
            <img
              src={newMember}
              alt="New Member Guide"
              className="w-16 h-16"
            />
          </div>
          <h3 className="text-xl font-semibold">New Member Guide</h3>
          <p className="text-sm text-center">Check out FAQ and guides</p>
          <a href="#" className="text-blue-500 hover:underline">Explore Now</a>
        </div>

        {/* Brand Ambassador */}
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-orange-500 p-4 rounded-full">
            <img
              src={brandAmbassador}
              alt="Brand Ambassador"
              className="w-16 h-16"
            />
          </div>
          <h3 className="text-xl font-semibold">Brand Ambassador</h3>
          <p className="text-sm text-center">Play with celebrity</p>
          <a href="#" className="text-blue-500 hover:underline">Have Fun Now</a>
        </div>

        {/* Download for Android */}
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-green-500 p-4 rounded-full">
            <img
              src={downloadAndroid}
              alt="Download for Android"
              className="w-16 h-16"
            />
          </div>
          <h3 className="text-xl font-semibold">Download for Android</h3>
          <a href="#" className="text-blue-500 hover:underline">Get it on Google Play</a>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
