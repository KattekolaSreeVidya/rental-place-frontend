import React from 'react';
import PropertyCard from './PropertyCard';

const properties = [
  { id: 1, name: 'Luxury Apartment', price: '$1200/month', location: 'New York' },
  { id: 2, name: 'Cozy House', price: '$900/month', location: 'Los Angeles' },
  { id: 3, name: 'Studio Apartment', price: '$800/month', location: 'San Francisco' },
];

function PropertyList({ search }) {
  const filteredProperties = properties.filter(property =>
    property.name.toLowerCase().includes(search.toLowerCase()) ||
    property.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="property-list">
      {filteredProperties.map(property => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}

export default PropertyList;
