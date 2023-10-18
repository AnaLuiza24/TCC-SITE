import React, { useState } from 'react';
import './index.scss';

const App = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="App">
      <div className="sidebar">
        <button onClick={toggleDropdown}> Smartphones <img src='/assets/images/seta-menu.png'/></button>
        {dropdownOpen && (
          <ul className="dropdown-content">
            <p>Iphone</p>
            <li>Samsung</li>
            <li> Motorola</li>
            <li> Xiaomi</li>
          </ul>
        )}
      </div>
      <div className="content">
        <p>Main Content Goes Here</p>
      </div>
    </div>
  );
};

export default App;