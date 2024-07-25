import React from 'react';
import logo from './Logo/attachment_131040148-modified (1).png'; // Adjust the path as needed

function Logo({ width = '100px' }) {
  return (
    <div>
      <img src={logo} alt="Logo" style={{ width }} />
    </div>
  );
}

export default Logo;
