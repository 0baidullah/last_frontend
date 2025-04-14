// import React from 'react';

// const PopularServers = () => {
//   // Server data
//   const servers = [
//     {
//       id: 1,
//       status: "LIGHT TRAFFIC I",
//       name: "JDM 415 BY NO",
//       serverName: "HESI - 3",
//       traffic: "Light Traffic",
//       players: "0/26",
//       location: "415",
//       tier: "Tier 0"
//     },
//     {
//       id: 2,
//       status: "HEAVY TRAFFIC I",
//       name: "SRP I PUBLIC - 1",
//       serverName: "Heavy Traffic",
//       traffic: "Heavy Traffic",
//       players: "13/18",
//       location: "SRP",
//       tier: "Tier 2"
//     },
//     {
//       id: 3,
//       status: "SPEC CARS I",
//       name: "HEAVY TRAFFIC 2",
//       serverName: "Heavy Traffic",
//       traffic: "Heavy Traffic",
//       players: "1/26",
//       location: "SRP",
//       tier: "Tier 0"
//     },
//     {
//       id: 4,
//       status: "LIGHT TRAFFIC I",
//       name: "SRP I PUBLIC - 18",
//       serverName: "Light Traffic",
//       traffic: "Light Traffic",
//       players: "0/18",
//       location: "SRP",
//       tier: "Tier 0"
//     }
//   ];

//   return (
//     <div className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-center mb-12">Popular Servers</h1>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {servers.map((server) => (
//             <div 
//               key={server.id}
//               className="bg-gray-900 border-2 border-gray-700 rounded-lg p-5
//                          hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]
//                          hover:border-yellow-500
//                          hover:scale-[1.02]
//                          transition-all duration-300"
//             >
//               <div className="space-y-3">
//                 <div className="flex justify-between items-start">
//                   <span className="text-yellow-400 font-bold text-sm uppercase tracking-wider">
//                     {server.status}
//                   </span>
//                   <span className="bg-gray-800 text-yellow-400 text-xs px-2 py-1 rounded">
//                     {server.tier}
//                   </span>
//                 </div>
                
//                 <h3 className="text-xl font-bold text-white">{server.name}</h3>
//                 <p className="text-gray-400 text-sm">{server.serverName}</p>
                
//                 <div className="flex items-center gap-2 text-sm">
//                   <span className={`px-2 py-1 rounded text-xs font-medium ${
//                     server.traffic.includes('Light') 
//                       ? 'bg-green-900 text-green-400' 
//                       : 'bg-red-900 text-red-400'
//                   }`}>
//                     {server.traffic}
//                   </span>
//                 </div>
                
//                 <div className="flex justify-between text-sm">
//                   <div className="flex items-center gap-1 text-gray-300">
//                     <span>📌</span>
//                     <span>{server.players}</span>
//                   </div>
//                   <div className="flex items-center gap-1 text-gray-300">
//                     <span>📍</span>
//                     <span>{server.location}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
          
//           {/* Explore All Servers Card */}
//           <div className="bg-gray-900 border-2 border-dashed border-gray-600 rounded-lg p-5
//                          hover:border-yellow-500 hover:bg-gray-800/80
//                          transition-all duration-300
//                          flex flex-col items-center justify-center
//                          min-h-[180px]">
//             <h3 className="text-xl font-bold text-yellow-400 mb-2">EXPLORE ALL SERVERS</h3>
//             <div className="text-center text-gray-400 text-sm">
//               <p>Tier 0</p>
//               <p>Tier 2</p>
//               <p>Tier 0</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopularServers;

import React from 'react';
import Link from 'next/link';

const PopularServers = () => {
  // Server data
  const servers = [
    {
      id: 1,
      tier: "Tier 2",
      status: "LIGHT TRAFFIC I",
      name: "JDM415 BY NO HESI - 3",
      traffic: "Light Traffic",
      players: "0/26",
      location: "415",
      isLocationActive: true
    },
    {
      id: 2,
      tier: "Tier 1",
      status: "HEAVY TRAFFIC I",
      name: "SRP I PUBLIC - 1",
      traffic: "Heavy Traffic",
      players: "13/18",
      location: "SRP",
      isLocationActive: true
    },
    {
      id: 3,
      tier: "Tier 2",
      status: "SPEC CARS I",
      name: "HEAVY TRAFFIC 2",
      traffic: "Heavy Traffic",
      players: "1/26",
      location: "SRP",
      isLocationActive: true
    },
    {
      id: 4,
      tier: "Tier 0",
      status: "LIGHT TRAFFIC I",
      name: "SRP I PUBLIC - 18",
      traffic: "Light Traffic",
      players: "0/18",
      location: "SRP",
      isLocationActive: true
    }
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
      {/* Header with title and button */}
      <div className="flex flex-col gap-6 items-start justify-start md:flex-row md:justify-between md:items-end w-full mb-12">
        <h2 className="5xl:text-8xl max-5xl:max-w-xl whitespace-pre-line font-inter h2-inter title-gradient !normal-case 5xl:!text-[6.8rem]">
          Popular Servers
        </h2> 
        
        <Link 
          href="https://nohesi.gg/servers" 
          rel="noopener noreferrer"
          className="btn-md border border-content-tertiary text-content-primary font-roboto hover:bg-top-light-17 !py-4 !px-7 !text-md uppercase transition-all duration-500 justify-center whitespace-nowrap md:!py-2 md:!px-2 md:!text-[12px] lg:!py-3 lg:!px-[1rem] 2xl:!px-[1.5rem] lg:!text-sm 2xl:!text-md 5xl:!px-[30px] 5xl:!py-[30px] 5xl:!text-[28px]"
        >
          EXPLORE ALL SERVERS
        </Link>
      </div>

      {/* Server cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {servers.map((server) => (
          <div 
            key={server.id}
            className="bg-gray-900 border-l-4 border-yellow-500 rounded-r-lg p-5 shadow-lg hover:shadow-yellow-500/20 hover:translate-y-[-4px] transition-all duration-300"
          >
            {/* Tier Badge */}
            <div className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full inline-block mb-3">
              {server.tier}
            </div>
            
            {/* Server Status and Name */}
            <div className="mb-2">
              <span className="text-yellow-400 font-bold text-sm uppercase tracking-wider">
                {server.status}
              </span>
              <h3 className="text-white font-bold text-lg mt-1">
                {server.name}
              </h3>
            </div>
            
            {/* Traffic Status */}
            <div className="flex items-center gap-2 mb-4">
              <div className={`w-3 h-3 rounded-full ${
                server.traffic.includes('Light') ? 'bg-green-500' : 'bg-red-500'
              }`}></div>
              <span className={`text-sm ${
                server.traffic.includes('Light') ? 'text-green-400' : 'text-red-400'
              }`}>
                {server.traffic}
              </span>
            </div>
            
            {/* Player Count and Location */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-5 h-5 border-2 border-gray-500 rounded-sm flex items-center justify-center">
                  <div className="w-3 h-3 bg-gray-500 rounded-sm"></div>
                </div>
                <span>{server.players}</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-5 h-5 border-2 border-gray-500 rounded-sm flex items-center justify-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-sm"></div>
                </div>
                <span>{server.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularServers;