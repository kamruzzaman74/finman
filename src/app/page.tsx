"use client";
import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Home/page'
import Council from './Components/Council';
import CorporateOfficeFintech from './Components/CorporateOfficeFintech';
import Business from './Components/Business'
import DataAnalysisServices from './Components/DataAnalysisServices';

function Page() {
  return (
    <div>
      <Navbar />
      <Home/>
      <Council/>
      <CorporateOfficeFintech/>
      <Business/>
      <DataAnalysisServices/>
    
    </div>
  );
}

export default Page;
