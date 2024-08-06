import React from 'react';
import { useTheme } from './Themecontext'; // Import useTheme hook

const Footer = ({ showFooter }) => {
  const { mode } = useTheme(); // Use useTheme hook to get mode

  if (!showFooter) {
    return null; // Hide footer if showFooter is false
  }

  return (
    <footer className={`bg-${mode === 'dark' ? 'dark' : 'body-tertiary'} text-center bottom`}>
      <div className="container p-4 pb-0">
        {/* Footer content here */}
      </div>
      <div className="text-center p-3">
        <h5 className={`text-${mode === 'dark' ? 'light' : 'dark'}`}>
          Designed by <a href="/" target="_blank" className={`text-${mode === 'dark' ? 'light' : 'primary'}`}>
            👨‍💻 Rohit Kumar
          </a>
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
