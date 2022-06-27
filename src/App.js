import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import "./App.css";
import ViewChapter from './pages/viewChapter/ViewChapter';

const App = () => {

   return (
      <div className='app-container'>
         <Routes>
            <Route path="/" element={<Navigate to="/chapter/:id/lesson/:id" />} />
            <Route path="/chapter/:id/lesson/:id" element={<ViewChapter />} />
         </Routes>
      </div>
   )
}

export default App;