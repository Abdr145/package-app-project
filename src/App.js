import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import PackageForm from './components/PackageForm';
import EditPackage from './components/EditPackage';
import './App.css';

function App() {
  const [packages, setPackages] = useState([]);

  // Add a new package
  const addPackage = (newPackage) => {
    setPackages([...packages, newPackage]);
  };

  // Update an existing package
  const updatePackage = (index, updatedPackage) => {
    const newPackages = packages.map((pkg, i) => (i === index ? updatedPackage : pkg));
    setPackages(newPackages);
  };

  // Delete a package
  const deletePackage = (index) => {
    setPackages(packages.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home packages={packages} deletePackage={deletePackage} />} />
        <Route path="/add" element={<PackageForm savePackage={addPackage} />} />
        <Route path="/edit/:index" element={<EditPackage packages={packages} updatePackage={updatePackage} />} />
      </Routes>
    </Router>
  );
}

export default App;
