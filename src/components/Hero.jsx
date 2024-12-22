import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white bg-gradient-to-b from-[#2c1251] to-[#3b2069]'>

<main className="max-w-[1240px] mx-auto text-center pt-20">
<h2 className="text-4xl font-semibold mb-6 leading-[0]">
  Transform your enterprise with
</h2>


<h3 className="text-4xl  font-semibold mb-6 leading-relaxed">
Generative Technology
        
</h3>
<p className="text-lg md:text-xl text-[#4a567c] mb-10">
  Streamline your business needs with specialized enterprise search designed
  <br /> for HR, Finance, SCM, and Legal
</p>

        <button className="bg-[#2c1251] border border-[#442d66] w-[200px] rounded-md font-medium py-3 text-[#907aa9] uppercase hover:bg-[#442d66]">
          Get Started
        </button>
      </main>

      <section className="max-w-[1240px] mx-auto pt-10 pb-20">
  <h3 className="text-3xl text-white-200 text-left mb-6">
    Explore <span className="text-white-600">AI Chatbots</span>
  </h3>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    {/* General Advisor Card */}
    <div className="bg-gradient-to-b from-[#2c1251] to-[#3b2069] p-6 rounded-lg text-center transform transition-transform hover:scale-105" style={{ boxShadow: '0 -5px 1px 0px #492879' }}>
      <div className="bg-[#3e2275] w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
        <img src="icon1.png" alt="General Advisor" className="h-8 w-8" />
      </div>
      <h4 className="text-xl font-semibold text-white mb-2">General Advisor</h4>
      <p className="text-gray-300 text-sm">
        Get comprehensive advice on various aspects of real estate, from legalities to client management, tailored to your needs.
      </p>
    </div>

    {/* Sales Advisor Card */}
    <div className="bg-gradient-to-b from-[#2c1251] to-[#3b2069] p-6 rounded-lg text-center transform transition-transform hover:scale-105" style={{ boxShadow: '0 -5px 1px 0px #492879' }}>
      <div className="bg-[#3e2275] w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
        <img src="icon2.png" alt="Sales Advisor" className="h-8 w-8" />
      </div>
      <h4 className="text-xl font-semibold text-white mb-2">Sales Advisor</h4>
      <p className="text-gray-300 text-sm">
        Boost your property sales with expert tips and proven strategies tailored for real estate professionals.
      </p>
    </div>

    {/* Negotiation Expert Card */}
    <div className="bg-gradient-to-b from-[#2c1251] to-[#3b2069] p-6 rounded-lg text-center transform transition-transform hover:scale-105" style={{ boxShadow: '0 -5px 1px 0px #492879' }}>
      <div className="bg-[#3e2275] w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
        <img src="icon3.png" alt="Negotiation Expert" className="h-8 w-8" />
      </div>
      <h4 className="text-xl font-semibold text-white mb-2">Negotiation Expert</h4>
      <p className="text-gray-300 text-sm">
        Master the art of negotiation with advice on closing deals, overcoming objections, and maximizing value.
      </p>
    </div>

    {/* Marketing Guru Card */}
    <div className="bg-gradient-to-b from-[#2c1251] to-[#3b2069] p-6 rounded-lg text-center transform transition-transform hover:scale-105" style={{ boxShadow: '0 -5px 1px 0px #492879' }}>
      <div className="bg-[#3e2275] w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
        <img src="icon4.png" alt="Marketing Guru" className="h-8 w-8" />
      </div>
      <h4 className="text-xl font-semibold text-white mb-2">Marketing Guru</h4>
      <p className="text-gray-300 text-sm">
        Elevate your marketing game with creative campaigns, branding insights, and social media strategies that attract clients.
      </p>
    </div>
  </div>
</section>

    </div>
  );
};

export default Hero;
