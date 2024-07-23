// src/Layout.js
import React from 'react';
import WhatsAppIcon from './WhatsAppIcon'; // Adjust the import path if needed
import HeaderTopOne from './HeaderTopOne'; // Adjust the import path if needed

const Layout = ({ children }) => {
  return (
    <div>
      <HeaderTopOne />
      {children}
      <WhatsAppIcon />
    </div>
  );
};

export default Layout;
