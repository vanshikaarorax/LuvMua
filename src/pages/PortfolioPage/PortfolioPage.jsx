// PortfolioPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './PortfolioPage.scss';
import make1 from "../../media/make1.jpg";
import make2 from "../../media/make2.jpg";
import make3 from "../../media/make3.jpg";
import make4 from "../../media/make4.jpg";

function PortfolioPage() {
  return (
    <div className="PortfolioPage">
      <h1>PORTFOLIO</h1>
      <div className="PortfolioColumns">
        {/* Column 1: Beauty */}
        <div className="PortfolioColumn">
          <h2>Beauty</h2>
          <Link to="/portfolio/bea">
            <img src={make1} alt="Beauty 1" className="portfolio-thumbnail" />
          </Link>
          <Link to="/portfolio/beauty">
            <img src={make2} alt="Beauty 2" className="portfolio-thumbnail" />
          </Link>
        </div>
        
        {/* Column 2: Editorial */}
        <div className="PortfolioColumn">
          <h2>Editorial</h2>
          <Link to="/portfolio/editorial">
            <img src={make3} alt="Editorial 1" className="portfolio-thumbnail" />
          </Link>
          <Link to="/portfolio/editorial">
            <img src={make4} alt="Editorial 2" className="portfolio-thumbnail" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
