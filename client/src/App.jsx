import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { pic } from './assets';
import { Home, CreatePost } from './pages';



const App = () => {
  return (
    <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
    <Link to="/" className="flex items-center">
    <div className="flex items-center">
      <img src={pic} alt="logo" style={{ maxWidth: '30%', height: 'auto' }} className="w-28 object-contain applogo mr-1" />
      <h2 className="font-semibold " style={{ fontSize: '1.5rem' }}>PictoriaCraft</h2>
      <h4 className="font-semibold " style={{ fontSize: '1.5rem' , color: '#6469ff', marginLeft: '10px' }}> Home </h4>
    </div>
    </Link>


      <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  </BrowserRouter>
  )
}

export default App