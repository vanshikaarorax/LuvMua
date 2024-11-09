import React from 'react';
import './CategoryPage.scss';

// Import images directly
import make8 from '../../../media/make8.jpg';
import make9 from '../../../media/make9.jpg';
import make10 from '../../../media/make10.jpg';

function BeautyPage() {
  // Use imported images in the array
  const beautyImages = [make8, make9, make10];
  console.log("Editorial Page Rendered");

  return (
    <div className="CategoryPage">
      <h1>Beauty</h1>
      
      <div className="image-grid">
        {beautyImages.map((image, index) => (
          <img key={index} src={image} alt={`Beauty ${index + 1}`} className="category-image" />
        ))}
      </div>
    </div>
  );
}

export default BeautyPage;
