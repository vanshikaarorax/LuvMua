import React from 'react';
import ServicesContainer from '../../components/ServicesContainer/ServicesContainer';
import './ServicesPage.scss';
import StoreLocator from '../../components/StoreLocator/Storelocator';

function ServicesPage() {
  return (
    <div className="ServicesPage" data-testid="ServicesPage">
      <h1>SERVICES</h1>
      <StoreLocator /> {/* Correctly rendering the map */}
    </div>
  );
}

export default ServicesPage;
