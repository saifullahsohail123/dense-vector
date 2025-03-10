import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';
import { FaUserTie } from "react-icons/fa";
import { FaRegMoneyBillAlt  } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";




const Hero = () => {
  return (
    <div className='text-white bg-gradient-to-b from-[#2e2f31] to-[#2f2f2f]'>

<main className="max-w-[1240px] mx-auto text-center pt-20">
<h2 className="text-4xl font-semibold mb-6 leading-[0]">
  Transform your enterprise with
</h2>


<h3 className="text-4xl  font-semibold mb-6 leading-relaxed">
Generative Technology
        
</h3>
<p className="text-lg md:text-xl text-[#c2c2c2] mb-10">
  Streamline your business needs with specialized enterprise search designed
  <br /> for HR, Finance, SCM, and Legal
</p>

<Link to="/dashboard">
        <button className="bg-[#46474c] border border-[#5a5b60] w-[200px] rounded-md font-medium py-3 text-[#ffffff] uppercase hover:bg-[#3b3c3f]">
          Get Started
        </button>
</Link>
      </main>

      <section className="max-w-[1240px] mx-auto pt-10 pb-20">
  <h3 className="text-3xl text-white-200 text-left mb-6">
    Explore <span className="text-white-600">AI Chatbots</span>
  </h3>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    {/* Human Resource Management Card */}
    <div
      className="bg-gradient-to-b from-[#2e2f31] to-[#393a3c] p-6 rounded-lg text-center transform transition-transform hover:scale-105"
      style={{ boxShadow: "0 -4px 1px rgba(128, 128, 128, 0.5)" }}
    >
      <div className="bg-[#4a4b4d] w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
      <FaUserTie className="text-white text-2xl" />
      </div>
      <h4 className="text-xl font-semibold text-white mb-2">Human Resource Management</h4>
      <p className="text-gray-300 text-sm">
        Get guidance on managing personnel, improving team productivity, and fostering a better work environment.
      </p>
    </div>

    {/* Finance Management Card */}
    <div
      className="bg-gradient-to-b from-[#2e2f31] to-[#393a3c] p-6 rounded-lg text-center transform transition-transform hover:scale-105"
      style={{ boxShadow: "0 -4px 1px rgba(128, 128, 128, 0.5)" }}
    >
      <div className="bg-[#4a4b4d] w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
      <FaRegMoneyBillAlt  className="text-white text-2xl" />
      </div>
      <h4 className="text-xl font-semibold text-white mb-2">Finance Management</h4>
      <p className="text-gray-300 text-sm">
        Manage budgets, analyze expenses, and make informed financial decisions effortlessly.
      </p>
    </div>

    {/* Supply Chain Management Card */}
    <div
      className="bg-gradient-to-b from-[#2e2f31] to-[#393a3c] p-6 rounded-lg text-center transform transition-transform hover:scale-105"
      style={{ boxShadow: "0 -4px 1px rgba(128, 128, 128, 0.5)" }}
    >
      <div className="bg-[#4a4b4d] w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
      <FaTruck   className="text-white text-2xl" />
      </div>
      <h4 className="text-xl font-semibold text-white mb-2">Supply Chain Management</h4>
      <p className="text-gray-300 text-sm">
        Optimize supply chain operations, reduce costs, and improve logistics efficiency.
      </p>
    </div>

    {/* Legal & Compliance Card */}
    <div
      className="bg-gradient-to-b from-[#2e2f31] to-[#393a3c] p-6 rounded-lg text-center transform transition-transform hover:scale-105"
      style={{ boxShadow: "0 -4px 1px rgba(128, 128, 128, 0.5)" }}
    >
      <div className="bg-[#4a4b4d] w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
      <FaBalanceScale  className="text-white text-2xl" />
      </div>
      <h4 className="text-xl font-semibold text-white mb-2">Legal & Compliance</h4>
      <p className="text-gray-300 text-sm">
        Navigate legal frameworks, ensure compliance, and manage risks with expert insights.
      </p>
    </div>
  </div>
</section>



    </div>
  );
};

export default Hero;
