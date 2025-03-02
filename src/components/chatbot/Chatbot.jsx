  import React, { useEffect, useRef } from "react";
  // import { Chart } from "chart.js";
  import "tailwindcss/tailwind.css";
  import { FaSearch } from "react-icons/fa"; // Ensure you have react-icons installed
  import { useState } from "react";
  import { FiMenu, FiSettings } from "react-icons/fi"; // Import Menu and Settings icons from react-icons
  import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa';
  import { CiCircleCheck } from "react-icons/ci";
  import { FaDownload } from "react-icons/fa"; // Import the Download icon from react-icons
  import {
    Chart as ChartJS,
    TimeScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
  } from "chart.js";
  import 'chartjs-adapter-date-fns'; // Import the date adapter for time scales
  import { Scatter } from "react-chartjs-2";
  
// Register required components
ChartJS.register(TimeScale, LinearScale, PointElement, Tooltip, Legend);

  


  const Sidebar = ({ setMenuOpen, menuOpen, setSelectedMenu }) => {
    return (
      <aside className="w-1/10 bg-[#1F1F1F] text-white flex flex-col relative">
        <div className="h-screen flex flex-col items-center text-white transition-all duration-300">
          {/* Sidebar Icons */}
          <div className="flex flex-col items-center py-2">
            {/* Menu Icon */}
            <button
              onClick={() => setMenuOpen(!menuOpen)} // Toggle the collapsible menu
              className="text-2xl p-2 hover:bg-gray-700 rounded-md transition"
            >
              <FiMenu />
            </button>
  
            {/* Right-side Menu (Absolute positioned) */}
            {menuOpen && (
              <div className="absolute top-0 left-full ml-2 bg-[#2B2B2B] p-4 rounded-md shadow-lg">
                <ul className="space-y-2">
                  {["Finance", "HR", "Supply Chain", "Legal"].map((item) => (
                    <li
                      key={item}
                      className="py-2 px-4 rounded-md hover:bg-gray-600 transition cursor-pointer"
                      onClick={() => {
                        setSelectedMenu(item); // Update the selected menu item
                        setMenuOpen(false); // Close the menu
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
  
            {/* Search Icon */}
            <div className="text-2xl p-2 hover:bg-gray-700 rounded-md transition">
              <FaSearch />
            </div>
  
            {/* Settings Icon */}
            <div className="text-2xl p-2 hover:bg-gray-700 rounded-md transition">
              <FiSettings />
            </div>
          </div>
        </div>
      </aside>
    );
  };
  

  


  
  
  // const Graph = () => {
  //   // Data for the graph




  //   const data = {
  //     datasets: [
  //       {
  //         label: "Shaykh Mahmud",
  //         data: [
  //           { x: new Date("2022-12-11T12:27:26").getTime(), y: 1 },
  //           { x: new Date("2022-12-11T12:45:04").getTime(), y: 1 },
  //           { x: new Date("2022-12-12T10:45:33").getTime(), y: 1 },
  //         ],
  //         borderColor: "rgb(239, 68, 68)", // Tailwind red-500
  //         backgroundColor: "rgb(239, 68, 68)",
  //         pointRadius: 6,
  //       },
  //       {
  //         label: "Sayf Al-Adl",
  //         data: [
  //           { x: new Date("2022-12-11T12:27:26").getTime(), y: 2 },
  //           { x: new Date("2022-12-12T10:45:33").getTime(), y: 2 },
  //         ],
  //         borderColor: "rgb(239, 68, 68)",
  //         backgroundColor: "rgb(239, 68, 68)",
  //         pointRadius: 6,
  //       },
  //       {
  //         label: "Al Masri",
  //         data: [
  //           { x: new Date("2022-12-11T12:45:04").getTime(), y: 3 },
  //           { x: new Date("2022-12-12T10:45:33").getTime(), y: 3 },
  //         ],
  //         borderColor: "rgb(234, 179, 8)", // Tailwind yellow-500
  //         backgroundColor: "rgb(234, 179, 8)",
  //         pointRadius: 6,
  //       },
  //       {
  //         label: "Hafiz",
  //         data: [
  //           { x: new Date("2022-12-12T10:45:33").getTime(), y: 4 },
  //           { x: new Date("2022-12-13T02:14:11").getTime(), y: 4 },
  //         ],
  //         borderColor: "rgb(234, 179, 8)",
  //         backgroundColor: "rgb(234, 179, 8)",
  //         pointRadius: 6,
  //       },
  //     ],
  //   };
  
  //   // Chart options
  //   const options = {
  //     responsive: true,
  //     maintainAspectRatio: false, // Disable aspect ratio to allow full width and height
  //     scales: {
  //       x: {
  //         type: "time",
  //         time: {
  //           unit: "hour",
  //           tooltipFormat: "MMM dd, yyyy HH:mm:ss",
  //         },
  //         grid: {
  //           color: "rgb(107, 114, 128)", // Tailwind gray-500
  //         },
  //         ticks: {
  //           color: "white",
  //         },
  //       },
  //       y: {
  //         grid: {
  //           color: "rgb(107, 114, 128)",
  //         },
  //         ticks: {
  //           color: "white",
  //         },
  //       },
  //     },
  //     plugins: {
  //       legend: {
  //         display: true,
  //         labels: {
  //           color: "white",
  //         },
  //       },
  //     },
  //   };
  
  //   return (
  //     <div className="w-full h-full bg-gray-800 p-6 rounded-lg">
  //       <Scatter data={data} options={options} />
  //     </div>
  //   );
  // };
  

  const Graph = () => {
    const [imageSrc, setImageSrc] = useState("");
    const [report, setReport] = useState("");
  
    useEffect(() => {
      // Fetch the visualization data including the report and the image
      fetch("http://127.0.0.1:5000/get-visualization-data")
        .then((response) => response.json())
        .then((data) => {
          // Set the image source for the graph
          setImageSrc("http://127.0.0.1:5000/generate-graph");
          // Set the report content
          setReport(data.visualization_and_report.report);
        })
        .catch((error) => console.error("Error fetching visualization data:", error));
    }, []);
  
    // Function to convert **bold** markdown to actual HTML <strong> tags
    const renderMarkdown = (text) => {
      // Convert newlines to <br />
      const newText = text.replace(/\n/g, "<br />");
      // Convert **bold** markdown to <strong>
      const boldText = newText.replace(/\*\*(.*?)\*\*/g, '<strong style="color: #FF6B6B;">$1</strong>');
      return { __html: boldText };
    };
  
    return (
      <div className="space-y-8 text-white">

        {/* Display the graph below the report */}
        <div className="h-100 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt="Graph"
              className="w-auto h-full object-contain"
            />
          ) : (
            "Loading graph..."
          )}
        </div>

        {/* Display the report with improved readability */}
        <div className="mb-8 p-6 border border-gray-600 rounded-lg">
          {/* <p className="text-2xl font-semibold text-[#FF6B6B] mb-4">Report:</p> */}
          <div
            className="text-md text-gray-300"
            dangerouslySetInnerHTML={renderMarkdown(report)}
          />
        </div>
  

      </div>
    );
    };
     
  


  
  
  const SearchBar = ({ selectedMenu }) => (
    <div className="flex items-center gap-4 mb-6">
      {/* Heading dynamically updates based on the selected menu */}
      <h2 className="text-lg font-semibold flex-shrink-0">
        {selectedMenu} - DenseVector Enterprise
      </h2>
  
      {/* Search Bar with Icon */}
      <div className="flex items-center flex-1 px-4 py-2 border border-gray-700 bg-[#2B2B2B] rounded-lg">
        {/* Search Icon */}
        <FaSearch className="text-gray-400 mr-3" />
        {/* Input Field */}
        <input
          type="text"
          placeholder={`Search insights about ${selectedMenu.toLowerCase()}...`}
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
      <section className="col-span-2 bg-[#2e2f31] rounded-lg shadow p-6">
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
          {/* <h3 className="text-sm font-semibold mb-2">Individual Risk & Interactions</h3> */}
          <div className="h-100 rounded-lg flex items-center justify-center">
          <Graph />         
          
           </div>
        </div>
      </section>
    );
  };



  const ChatArena = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    return (
      <section className="bg-[#2e2f31] rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-100 mb-4">Chat Arena</h2>
  
        {/* Server's initial message */}
        <div className="mb-4">



          <div className="bg-[#393a3c] p-4 rounded-lg text-sm text-gray-200">
          <div className="flex justify-between items-center">
      <div className="flex items-start ml-6 gap-2">
        {/* Left Side: Marcus Dias and Time */}
        <span>6:48 PM</span> {/* Example time */}
      </div>


    </div>

            What can I help you with? Feel free to ask a follow-up question.
          </div>
        </div>
  
        {/* User's input simulation */}
        <div className="mb-4">
  <div className="ml-20 bg-gray-600 p-4 rounded-lg text-sm text-white">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        {/* Left Side: Marcus Dias and Time */}
        <span>Marcus Dias</span>
        <span>12:00 PM</span> {/* Example time */}
      </div>

      {/* Right Side: Search Icon */}
      <button className="text-gray-300 hover:text-white">
        <FaSearch className="w-5 h-5" />
      </button>
    </div>

    {/* Text below the row */}
    <div className="text-left mt-2">
      Who communicates with Shaykh Mahmud in Iraq?
    </div>
  </div>
</div>

        <div className="mb-4">

        {/* Relevant News Information */}
        <div className="bg-[#393a3c] text-white p-6">
          <div className="max-w-4xl mx-auto bg-[#393a3c] rounded-lg p-6 shadow-lg">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-4">
      {/* Left section: Time and Dropdown */}
      <div className="flex items-center gap-4 ">
        <p className="text-xl font-semibold text-gray-100">
          6:48 PM
        </p>

        {/* Dropdown Button */}
        <button
      onClick={() => setDropdownOpen(!dropdownOpen)}
      className="bg-[#393a3c] text-white-300 px-4 py-2 rounded-lg hover:bg-gray-600 flex items-center gap-2 border bottom-2"
    >
      {/* Tick icon */}
      <CiCircleCheck className="w-6 h-6 text-white-500" />
      
      {/* Text */}
      Finished generating

      {/* Arrow down icon */}
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
        {dropdownOpen && (
          <ul className="absolute mt-2 bg-gray-700 text-gray-300 rounded-lg shadow-lg w-48">
            {/* No options as per the requirement */}
          </ul>
        )}
      </div>

      {/* Right section: Thumbs Up and Thumbs Down */}
      <div className="flex items-center gap-4">
        {/* Thumbs Up Button */}
        <button className="flex items-center justify-center p-2  text-gray-300 rounded-lg hover:bg-gray-600">
          <FaRegThumbsUp className="w-6 h-6" />
        </button>

        {/* Thumbs Down Button */}
        <button className="flex items-center justify-center p-2 text-gray-300 rounded-lg hover:bg-gray-600">
          <FaRegThumbsDown className="w-6 h-6" />
        </button>
      </div>
    </div>
            <p className="text-sm  text-white-200 mb-4">
                Sayf Al-Adi, Al Masri, and Hafiz have communication with Shaykh Mahmud.
              </p>


            {/* Table Section */}
            <div className="overflow-x-auto">
  {/* Content Outside the Table */}
  <div className="border border-gray-600 p-4">
  <div className="flex justify-between items-center mb-2 text-gray-300">

    <p className="text-lg font-semibold">Relevant News Information</p>
    <button className="text-gray-300 hover:text-white">
      <FaDownload className="w-4 h-4" />
    </button>
    </div>


  {/* Table */}
  <table className="table-auto w-full text-left rounded-lg">
    {/* Table Header */}
    <thead className=" text-gray-300">
      <tr>
        <th className="py-2">Sources</th>
        <th className="py-2">Time</th>
        <th className="py-2">From Body</th>
      </tr>
    </thead>
    {/* Table Body */}
    <tbody className="text-gray-200 text-xs">
      <tr className="">
        <td className="py-2">Al Jazeera News</td>
        <td className="py-2">12/09/2022 at 8:45PM</td>
        <td className="py-2">
          “Shaykh Mahmud sponsored Hafiz $50,000 for six months ...”
          <br />
          <span className="text-gray-400">+3 more instances</span>
        </td>
      </tr>
      <tr className="">
        <td className="py-2">Letter to Hafiz about Financial Sponsorship</td>
        <td className="py-2">11/27/2022 at 8:32PM</td>
        <td className="py-2">
          This is the amount required for six months of financial sponsorship for you, $50,000...
          <br />
          <span className="text-gray-400">+2 more instances</span>
        </td>
      </tr>
    </tbody>
  </table>
  </div>


</div>
  
            {/* Sources Section */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-200">Sources:</h3>
              <ul className="list-disc list-inside text-gray-400">
              <div className="">
              <span className="bg-[#4D4D4D] text-white text-xs px-2 py-1 rounded mr-2">
                1. Letter to Hafiz about Financial Scholarship
              </span>
              <span className="bg-[#4D4D4D] text-white text-xs px-2 py-1 rounded mr-2">
                2. Al Jazeera News
              </span>

            </div>
              </ul>
            </div>
  


          </div>
        </div>



        </div>

          {/* User input field */}
          <div className="mb-4">
          <input
            type="text"
            placeholder="Type your message here..."
            className="w-full px-4 py-2 border border-gray-600 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

  
  
  

      </section>
    );
  };
  


  const ResultsSection = () => (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-4">86 Results</h2>
      <div className="space-y-4">
        {Array.from({ length: 7 }).map((_, index) => (
          <div
            key={index}
            className="flex items-start bg-[#2B2B2B] p-4 rounded-lg shadow"
          >
            <div className="w-12 h-12 bg-[#2e2f31] rounded-full flex items-center justify-center text-white font-bold">
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

  const Dashboard = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState("Finance"); // Default to "Finance"


  
    const renderMainContent = () => {
      switch (selectedMenu) {
        case "Finance":
          return (
            <main className="flex-1 p-6 ">
            <SearchBar selectedMenu={selectedMenu} />
            <div className="grid grid-cols-2 gap-6">
                <div>
                  <ChatArena />
                </div>
                <div className="flex flex-col gap-6">
                  <AISummary content="Finance Summary" />
                  <ResultsSection results="Finance Results" />
                </div>
              </div>
            </main>
          );
        case "HR":
          return (
            <main className="flex-1 p-6">
            <SearchBar selectedMenu={selectedMenu} />
            <div className="grid grid-cols-2 gap-6">
                <div>
                  <ChatArena />
                </div>
                <div className="flex flex-col gap-6">
                  <AISummary content="HR Summary" />
                  <ResultsSection results="HR Results" />
                </div>
              </div>
            </main>
          );
        case "Supply Chain":
          return (
            <main className="flex-1 p-6">
            <SearchBar selectedMenu={selectedMenu} />
            <div className="grid grid-cols-2 gap-6">
                <div>
                  <ChatArena />
                </div>
                <div className="flex flex-col gap-6">
                  <AISummary content="Supply Chain Summary" />
                  <ResultsSection results="Supply Chain Results" />
                </div>
              </div>
            </main>
          );
        case "Legal":
          return (
            <main className="flex-1 p-6">
            <SearchBar selectedMenu={selectedMenu} />
            <div className="grid grid-cols-2 gap-6">
                <div>
                  <ChatArena />
                </div>
                <div className="flex flex-col gap-6">
                  <AISummary content="Legal Summary" />
                  <ResultsSection results="Legal Results" />
                </div>
              </div>
            </main>
          );
        default:
          return null;
      }
    };
  
    return (
      <div className="bg-[#1A1A1A] font-sans text-white min-h-screen flex">
        <Sidebar setMenuOpen={setMenuOpen} menuOpen={menuOpen} setSelectedMenu={setSelectedMenu} />
        {renderMainContent()}
      </div>
    );
  };
  

  export default Dashboard;