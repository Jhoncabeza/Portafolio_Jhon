import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Containers/Navbar';

function AppRouter() {

  return (
    <>
      <Router>
        <div className="min-h-screen w-full md:bg-[#E1E5EA] dark:bg-[#222831] md:py-16">
          <div className="min-h-screen bg-[#FAF3F3] dark:bg-[#444444] md:max-w-6xl md:m-auto sm:rounded-lg p-2 md:p-8  md:shadow-2xl " >
            <Navbar />
          </div>
        </div>
      </Router>
    </>
  );
}

export default AppRouter;
