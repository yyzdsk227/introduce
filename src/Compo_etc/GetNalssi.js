// import React, { useContext, useState, useEffect } from "react";
// import axios from "axios";
// import stateContext from "../Context/StateContext";

// export const GetNalssi = () => {
//   const initNalssi = useContext(stateContext);
//   const [nalssi, SetNalssi] = useState(initNalssi);

//   const getNalssi = async () => {
//     const response = await axios.get(
//       "http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=bd8c36da2c4510a870343fdbd5739b54"
//     );

//     SetNalssi({
//       temperature: Math.floor(response.data.main.temp - 273.15),
//       icon: response.data.weather[0].icon,
//       name: response.data.weather[0].main,
//       isloadding: false,
//     });
//   };

//   useEffect(() => {
//     getNalssi();
//   }, []);

//   return [nalssi, SetNalssi];
// };

// // export const LoadNewNalssi = () => {
// //   SetNalssi({
// //     isloadding: true,
// //   });
// //   setTimeout(() => {
// //     GetNalssi();
// //     console.log("1500ms?", nalssi.name, nalssi.isloadding);
// //   }, 1500);
// // };
