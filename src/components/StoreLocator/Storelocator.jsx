import React, { useEffect, useRef } from 'react';
import { createStoreLocatorMap } from '@gocrisp/store-locator';
import '@gocrisp/store-locator/dist/store-locator.css';
import "./Storlocator.scss";
function StoreLocator() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const mapContainer = mapRef.current;
      console.log("Map container ref:", mapContainer);
  
      // Ensure that the map has a high z-index and is on top
      mapContainer.style.zIndex = '100';
  
      try {
        createStoreLocatorMap({
          container: mapContainer,
          geoJson: 'https://raw.githubusercontent.com/vanshikaarorax/geojson/main/store.geojson',
          loaderOptions: { apiKey: '' },
        });
      } catch (error) {
        console.error("Error initializing map:", error);
      }
    }
  }, []);
  return (
    <div 
    id="map-container"
      ref={mapRef} 
      style={{ 
        height: '500px', 
        width: '100%', 
        overflow: 'hidden' 
      }}
    />
  );
}

export default StoreLocator;

