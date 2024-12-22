import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { LaptopDetails } from './LaptopDetails';

const laptops = [
  {
    id: 1,
    title: "PC Portable Gamer HP VICTUS",
    price: "7490 DH",
    image: "./images/image1.jpg"
  },
  {
    id: 2,
    title: "PC Portable Gamer HP VICTUS (Microsoft 365)",
    price: "2190 DH",
    image: "./images/image2.jpg"
  },
  {
    id: 3,
    title: "PC Portable Chromebook Acer",
    price: "3640 DH",
    image: "./images/image3.webp"
  },
  {
    id: 4,
    title: "PC Portable - HUAWEI",
    price: "1270 DH",
    image: "./images/image4.jpg"
  }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route  index element={<App laptops={laptops}/>}/>
        <Route  path = '/:id' element={<LaptopDetails laptops={laptops}/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


