// react components and functions go here
import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';
import { Routes, Route } from "react-router-dom";
// jsx components go here
import Component from 'components.jsx';


const App = () => {
  // hooks go here
  const [mode, setMode] = useState(localStorage.getItem('pots-theme'));

  return (
    <Suspense >
        <div>
            <Routes>
              <Route path="/" element={<Main pic={pic} />} />
              <Route path="/aboutPage" element={<About />} />
              <Route path="/kidVideosPage" element={<KidVideos />} />
              <Route path="/resourcePage" element={<Resources />} />
              <Route path="/tipsPage" element={<TipsTricks />} />
              <Route path="/caregiverPage" element={<CaregiverVideos />} />
            </Routes>
        </div>
    </Suspense>
  )
}

export default App;