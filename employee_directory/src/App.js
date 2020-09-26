import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import EmployeeTable from './components/EmployeeTable';

function App() {
  return (
    <div>
     <Header />
        <EmployeeTable />
        <Footer />
    </div>
  );
}

export default App;
