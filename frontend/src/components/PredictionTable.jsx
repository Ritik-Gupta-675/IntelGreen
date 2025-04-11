// import React, { useState, useEffect } from 'react';

// const PredictionTable = () => {
//   const [predictions, setPredictions] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/tfpredict/');
//         const data = await response.json();
        
//         // Add the new prediction to the start of the array
//         setPredictions(prev => [data, ...prev].slice(0, 10));
//       } catch (error) {
//         console.error('Error fetching predictions:', error);
//       }
//     };

//     // Fetch data every 5 seconds
//     const intervalId = setInterval(fetchData, 5000);

//     // Initial fetch
//     fetchData();

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
//       <h2 className="text-2xl font-bold text-green-800 mb-4">Recent Predictions</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full">
//           <thead>
//             <tr className="bg-green-50">
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prediction</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Coordinates</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {predictions.map((prediction, index) => (
//               <tr key={index} className="hover:bg-gray-50">
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                   {prediction.prediction.toFixed(4)}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                   ({prediction.coordinates.x}, {prediction.coordinates.y})
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                   {new Date(prediction.timestamp * 1000).toLocaleString()}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default PredictionTable;