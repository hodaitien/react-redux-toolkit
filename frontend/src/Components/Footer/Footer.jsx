import React from 'react';
import './footer.css';

const Footer = ({isOpenPost, setOpen}) => {
  return <footer>
      <div className="footer-title" onClick={() => setOpen(!isOpenPost)}>
          {isOpenPost ? 'x' : '+'} 
      </div>
  </footer>;
};

export default Footer;
