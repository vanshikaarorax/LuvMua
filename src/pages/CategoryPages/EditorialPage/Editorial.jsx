import React from 'react';
import './CategoryPage.scss';

// Import images directly
import make5 from '../../../media/make5.jpg';
import make6 from '../../../media/make6.jpg';
import make7 from '../../../media/make7.jpg';

function EditorialPage() {
  // Use imported images in the array
  const editorialImages = [make5, make6, make7];
  console.log("Editorial Page Rendered");

  return (
    <div className="CategoryPage">
      <h1>Editorial</h1>
      
      <div className="image-grid">
        {editorialImages.map((image, index) => (
          <img key={index} src={image} alt={`Editorial ${index + 1}`} className="category-image" />
        ))}
      </div>
    </div>
  );
}

export default EditorialPage;
