import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer--logo--container">
        <img src="./logo.png" alt="" />
        <p>The Relationship Intelligence and Deal Flow CRM Designed by Ex-Investors</p>
        <div className="social--media--container">
          <div><img src="./facebook.png" alt="" /></div>
          <div><img src="./x.png" alt="" /></div>
          <div><img src="./angellist.png" alt="" /></div>
          <div><img src="./linkedin.png" alt="" /></div>




        </div>
      </div>
      <div className="footer-links">

        <div className="footer-column">
          <h3>About</h3>
          <ul>
            <li><a href="/">About Us</a></li>

            <li><a href="/">Careers</a></li>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Contact</a></li>


          </ul>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li><a href="/">Blogs</a></li>
            <li><a href="/">Content Library</a></li>
            <li><a href="/">Customer Stories</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Industries</h3>
          <ul>
            <li><a href="/">Venture Capital</a></li>
            <li><a href="/">Private Equity</a></li>
            <li><a href="/">Mergers & Acquisitions</a></li>
            <li><a href="/">Investment Banking</a></li>
            <li><a href="/">Commercial Real Estate</a></li>
            <li><a href="/">Consulting</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Product</h3>
          <ul>
            <li><a href="/">CRM</a></li>
            <li><a href="/">Reporting</a></li>
            <li><a href="/">Mobile</a></li>
            <li><a href="/">Integrations</a></li>
            <li><a href="/">Salesforce</a></li>
            <li><a href="/">Relationship intelligence</a></li>
          </ul>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
