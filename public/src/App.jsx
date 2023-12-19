// react components and functions go here
import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';
import { Routes, Route } from "react-router-dom";
// jsx components go here
import Component from './components/component.jsx';


const App = () => {
  // hooks go here

//styling and functions

// add in suspense when you need some code splitting. Also add in the route component when
// you need to add more routes
// return (
//   <Suspense >
//       <div>
//           <Routes>
//             <Route path="/" element={<RouteComp pic={pic} />} />
//           </Routes>
//       </div>
//   </Suspense>
// )
return (
  <div>
    Hi! I'm the main Page in App.jsx!
    <Component />
  </div>
)
}

export default App;