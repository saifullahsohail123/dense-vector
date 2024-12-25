import React, { useEffect, useRef } from "react";
// import { Chart } from "chart.js";
import "tailwindcss/tailwind.css";
import { FaSearch } from "react-icons/fa"; // Ensure you have react-icons installed


const Sidebar = () => (
  <aside className="w-1/5 bg-[#1F1F1F] text-white p-4 flex flex-col">
    <div className="mb-4">
      <button className="w-full bg-[#333333] py-2 px-4 rounded hover:bg-[#4D4D4D]">
        Add Document Filter
      </button>
    </div>
    <div className="text-gray-400 mt-auto text-sm">&copy; 2024 DenseVector</div>
  </aside>
);

const SearchBar = () => (
    <div className="flex items-center gap-4 mb-6">
      {/* Heading vertically centered */}
      <h2 className="text-lg font-semibold flex-shrink-0">DenseVector Enterprise</h2>
  
      {/* Search Bar with Icon */}
      <div className="flex items-center flex-1 px-4 py-2 border border-gray-700 bg-[#2B2B2B] rounded-lg">
        {/* Search Icon */}
        <FaSearch className="text-gray-400 mr-3" />
        {/* Input Field */}
        <input
          type="text"
          placeholder="Who are the highest risks in the Al-Qaeda network today?"
          className="flex-1 bg-transparent text-white focus:outline-none"
        />
      </div>
    </div>
  );
  

const AISummary = () => {
  const chartRef = useRef(null);

//   useEffect(() => {
//     if (chartRef.current) {
//       const ctx = chartRef.current.getContext("2d");
//       new Chart(ctx, {
//         type: "line",
//         data: {
//           labels: ["Interaction 1", "Interaction 2", "Interaction 3", "Interaction 4"],
//           datasets: [
//             {
//               label: "Risk Score",
//               data: [75, 80, 85, 98],
//               borderColor: "#FF6B6B",
//               backgroundColor: "rgba(255, 107, 107, 0.2)",
//               fill: true,
//             },
//           ],
//         },
//         options: {
//           responsive: true,
//           plugins: {
//             legend: {
//               display: false,
//             },
//           },
//           scales: {
//             x: {
//               grid: {
//                 color: "#333",
//               },
//             },
//             y: {
//               grid: {
//                 color: "#333",
//               },
//             },
//           },
//         },
//       });
//     }
//   }, []);

  return (
    <section className="col-span-2 bg-[#2B2B2B] rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">AI Summary</h2>
        <button className="bg-[#333333] text-white text-sm px-3 py-1 rounded hover:bg-[#4D4D4D]">
          Finished Generating
        </button>
      </div>
      <div className="mb-4">
        <p className="font-bold text-[#FF6B6B]">Shaykh Mahmud</p>
        <p className="text-gray-400">
          Shaykh Mahmud is the highest-risk Al-Qaeda official, with a risk score of 98, due to
          his influence in finance and violent political activities in Iraq.
        </p>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Individual Risk & Interactions</h3>
        <div className="h-48 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center">
          <canvas ref={chartRef} className="w-full h-full"></canvas>
        </div>
      </div>
    </section>
  );
};

const ChatArena = () => (
    <section className="bg-[#2B2B2B] rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Chat Arena</h2>
      
      {/* Server's initial message */}
      <div className="mb-4">
        <div className="bg-gray-800 p-4 rounded-lg text-sm">
          What can I help you with? Feel free to ask a follow-up question.
        </div>
      </div>
  
      {/* User's input simulation */}
      <div className="mb-4">
        <div className="bg-[#333333] p-4 rounded-lg text-sm text-white text-right">
          Who communicates with Shaykh Mahmud in Iraq?
        </div>
      </div>
  
      {/* Server's response */}
      <div className="mb-4">
        <div className="bg-gray-800 p-4 rounded-lg text-sm">
          Shaykh Mahmud communicates with Hafiz regularly for financial sponsorship updates.
        </div>
      </div>
  
      {/* Additional user message */}
      <div className="mb-4">
        <div className="bg-[#333333] p-4 rounded-lg text-sm text-white text-right">
          What is the purpose of the sponsorship?
        </div>
      </div>
  
      {/* Additional server response */}
      <div className="mb-4">
        <div className="bg-gray-800 p-4 rounded-lg text-sm">
          The sponsorship is intended to support Hafiz's living expenses and education for six months.
        </div>
      </div>
  
      {/* User input field */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Type your message here..."
          className="w-full px-4 py-2 border border-gray-700 bg-[#333333] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
  
      {/* Relevant News Information */}
      <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
        <h3 className="text-sm font-semibold mb-2 text-[#FF6B6B]">
          Relevant News Information
        </h3>
        <ul className="text-sm text-gray-400">
          <li className="mb-2">
            <span className="font-bold text-white">Al Jazeera News</span> - Shaykh Mahmud
            sponsored Hafiz $50,000 for six months.
          </li>
          <li>
            <span className="font-bold text-white">Letter to Hafiz</span> - Amount required for
            six months of financial sponsorship.
          </li>
        </ul>
      </div>
    </section>
  );
  

const ResultsSection = () => (
  <div className="mt-6">
    <h2 className="text-lg font-semibold mb-4">86 Results</h2>
    <div className="space-y-4">
      {Array.from({ length: 7 }).map((_, index) => (
        <div
          key={index}
          className="flex items-start bg-[#2B2B2B] p-4 rounded-lg shadow"
        >
          <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold">
            {String.fromCharCode(65 + index)}
          </div>
          <div className="ml-4 flex-1">
            <h3 className="font-semibold text-[#FF6B6B]">
              Intelligence Report {index + 1}
            </h3>
            <p className="text-gray-400 text-sm">
              Description of intelligence report {index + 1}.
            </p>
          </div>
          <div className="ml-4">
            <span className="bg-[#4D4D4D] text-white text-xs px-2 py-1 rounded mr-2">
              Tag 1
            </span>
            <span className="bg-[#4D4D4D] text-white text-xs px-2 py-1 rounded mr-2">
              Tag 2
            </span>
            <span className="bg-[#4D4D4D] text-white text-xs px-2 py-1 rounded">
              Tag 3
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Dashboard = () => (
  <div className="bg-[#1A1A1A] font-sans text-white h-screen flex">
    <Sidebar />
    <main className="flex-1 p-6">
      <SearchBar />
      <div className="grid grid-cols-2 gap-6">
  {/* Left column for ChatArena */}
  <div>
    <ChatArena />
  </div>

  {/* Right column for AISummary and ResultsSection */}
  <div className="flex flex-col gap-6">
    <AISummary />
    <ResultsSection />
  </div>
</div>

    </main>
  </div>
);

export default Dashboard;