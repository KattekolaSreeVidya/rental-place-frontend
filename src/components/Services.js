import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [expandedItem, setExpandedItem] = useState(null);

  const handleCategoryExpand = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
    setExpandedItem(null); // Reset the expanded item when changing category
  };

  const handleItemExpand = (item) => {
    setExpandedItem(expandedItem === item ? null : item);
  };

  // Details for each space type
  const details = {
    '1-Bedroom Apartments': {
      name: '1-Bedroom Apartments',
      rent: '$1200/month',
      details: 'Located in a vibrant neighborhood with easy access to public transport.',
      amenities: ['On-site parking', 'Swimming pool', 'Gym facilities', 'Pet-friendly']
    },
    '2-Bedroom Apartments': {
      name: '2-Bedroom Apartments',
      rent: '$1800/month',
      details: 'Spacious living with modern amenities and close to shopping centers.',
      amenities: ['On-site parking', 'Swimming pool', 'Gym facilities']
    },
    'Single-Family Homes': {
      name: 'Single-Family Homes',
      rent: '$2500/month',
      details: 'A large home with a backyard in a family-friendly area.',
      amenities: ['On-site parking', 'Private garden', 'Pet-friendly']
    },
    'Townhouses': {
      name: 'Townhouses',
      rent: '$2200/month',
      details: 'A multi-story home with a community feel and close to schools.',
      amenities: ['On-site parking', 'Swimming pool', 'Gym facilities']
    },
    'Office Spaces': {
      name: 'Office Spaces',
      rent: '$3000/month',
      details: 'Modern office spaces with high-speed internet and meeting rooms.',
      amenities: ['High-speed internet', 'Conference rooms', 'Prime location']
    },
    'Retail Stores': {
      name: 'Retail Stores',
      rent: '$5000/month',
      details: 'High-foot-traffic location ideal for retail businesses.',
      amenities: ['High visibility', 'Flexible layout', 'Prime location']
    },
    'Warehouse Units': {
      name: 'Warehouse Units',
      rent: '$4000/month',
      details: 'Large storage space with easy access to major roads.',
      amenities: ['Large floor space', 'High ceilings', 'Security']
    },
    'Industrial Facilities': {
      name: 'Industrial Facilities',
      rent: '$6000/month',
      details: 'Facility suited for manufacturing and industrial needs.',
      amenities: ['Large floor space', 'Heavy-duty infrastructure', 'Security']
    },
    'Beachfront Villas': {
      name: 'Beachfront Villas',
      rent: '$7000/week',
      details: 'Luxurious villa right on the beach with stunning views.',
      amenities: ['Private pool', 'Beach access', 'Fully-equipped kitchen']
    },
    'Mountain Cabins': {
      name: 'Mountain Cabins',
      rent: '$3000/week',
      details: 'Cozy cabin with beautiful mountain views and hiking trails nearby.',
      amenities: ['Fireplace', 'Mountain views', 'Fully-equipped kitchen']
    },
    'City Apartments': {
      name: 'City Apartments',
      rent: '$2500/week',
      details: 'Modern apartment in the heart of the city with easy access to attractions.',
      amenities: ['City views', 'Close to attractions', 'Fully-equipped kitchen']
    },
    'Luxury Resorts': {
      name: 'Luxury Resorts',
      rent: '$10000/week',
      details: 'Exclusive resorts offering top-notch amenities and services.',
      amenities: ['Private beach', 'Spa services', 'Luxury accommodations']
    }
  };

  return (
    <div className="services-page">
      <h1>Our Services</h1>

      <div className="service-category">
        <button onClick={() => handleCategoryExpand('residential')} className="service-button">
          Residential Rentals
        </button>
        {expandedCategory === 'residential' && (
          <div className="service-details">
            <div className="service-card">
              <h2>Available Properties</h2>
              <ul className="property-list">
                {Object.keys(details).filter(key => key.includes('Apartment') || key.includes('Home') || key.includes('Townhouse')).map((item) => (
                  <li key={item} onClick={() => handleItemExpand(item)} className="property-item">
                    {item}
                    {expandedItem === item && (
                      <div className="property-details">
                        <h3>{details[item].name}</h3>
                        <p>{details[item].details}</p>
                        <p><strong>Rent:</strong> {details[item].rent}</p>
                        <h4>Amenities:</h4>
                        <ul>
                          {details[item].amenities.map((amenity, index) => (
                            <li key={index}>{amenity}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      <div className="service-category">
        <button onClick={() => handleCategoryExpand('commercial')} className="service-button">
          Commercial Rentals
        </button>
        {expandedCategory === 'commercial' && (
          <div className="service-details">
            <div className="service-card">
              <h2>Available Spaces</h2>
              <ul className="property-list">
                {Object.keys(details).filter(key => key.includes('Office') || key.includes('Retail') || key.includes('Warehouse') || key.includes('Industrial')).map((item) => (
                  <li key={item} onClick={() => handleItemExpand(item)} className="property-item">
                    {item}
                    {expandedItem === item && (
                      <div className="property-details">
                        <h3>{details[item].name}</h3>
                        <p>{details[item].details}</p>
                        <p><strong>Rent:</strong> {details[item].rent}</p>
                        <h4>Amenities:</h4>
                        <ul>
                          {details[item].amenities.map((amenity, index) => (
                            <li key={index}>{amenity}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      <div className="service-category">
        <button onClick={() => handleCategoryExpand('vacation')} className="service-button">
          Vacation Rentals
        </button>
        {expandedCategory === 'vacation' && (
          <div className="service-details">
            <div className="service-card">
              <h2>Types of Rentals</h2>
              <ul className="property-list">
                {Object.keys(details).filter(key => key.includes('Villa') || key.includes('Cabin') || key.includes('Apartment') || key.includes('Resort')).map((item) => (
                  <li key={item} onClick={() => handleItemExpand(item)} className="property-item">
                    {item}
                    {expandedItem === item && (
                      <div className="property-details">
                        <h3>{details[item].name}</h3>
                        <p>{details[item].details}</p>
                        <p><strong>Rent:</strong> {details[item].rent}</p>
                        <h4>Amenities:</h4>
                        <ul>
                          {details[item].amenities.map((amenity, index) => (
                            <li key={index}>{amenity}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Services;
