import React from 'react';

function PropertyCard({ property }) {
  return (
    <div className="property-card">
      <h3>{property.name}</h3>
      <p>{property.location}</p>
      <p>{property.price}</p>
    </div>
  );
}

export default PropertyCard;
