import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './CatalogPage.css';
import './InformationPage';

function CatalogPage() {
  const [dogOwners, setDogOwners] = useState([]);

  useEffect(() => {

    fetch('https://api.jsonbin.io/v3/b/6422b9c8c0e7653a0597d126')
    .then(res => res.json())
    .then(data => {


      if (Array.isArray(data.record)) {
        setDogOwners(data.record)
      } else {
        setDogOwners([]);
      }
    })

    .catch(error => {
      console.log(error)
      setDogOwners([]);
    })
  }, [])
  return (
    <div>
      <h2>Registered Dogs Catalog</h2>
      <ul>
        {dogOwners.map((dog, index) => (
          <li key={`${index}-${dog.name}`}>
            <Link to={`/dogs/${dog.name}`} state={{ dog : dog }}>{dog.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CatalogPage;
