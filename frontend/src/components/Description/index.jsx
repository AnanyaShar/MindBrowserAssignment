import React from 'react';

import MB_Logo from '../../assets/svg/mindbowser-logo.svg';
import Accolades_img from '../../assets/svg/Accolades-01-01.svg';
import './styles.scss';

/**
 * Description Component
 * @constructor
 */
function Description() {
  return (
    <div className="description-container">
      <img src={MB_Logo} alt="Mind Brower Logo" className="mb_logo" />
      <h2>We Build Award Winning Products That Sell</h2>
      <h3>Market Research</h3>
      <p>We believe in developing award-winning products and in order to do so, there are three main components that we address: the consumer, the market and your competitors. Each helps answer the questions crucial to product adoption and feeds our development & deployment strategy.</p>
      <p>The goal of market research is to better understand your product and potential changes it might take in the future. This helps revolutionize a product entering a maturity stage or develop a new and innovative product.</p>
      <p>Following are some of the activities we perform during the market research phase:</p>
      <ul>
        <li>Consumer needs analysis</li>
        <li>Competitor evaluation</li>
        <li>Market fit analysis</li>
        <li>Optimizing product offerings</li>
      </ul>
      <h2 className="accolades_title">Accolades</h2>
      <img src={Accolades_img} alt="Accolades Logo" className="accolades_logo" />
    </div>
  );
}

export default Description;
