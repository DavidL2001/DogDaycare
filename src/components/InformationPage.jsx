import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

function InformationPage() {
    const { name } = useParams();
    const location = useLocation();
    const { dog } = location.state;

    return (
        <div>
            <h1>{name}</h1>
            <img src={dog.img} alt={dog.breed} />
            <p>Owner: {dog.owner.name} {dog.owner.lastName}</p>
            <p>Phonenumber: {dog.owner.phoneNumber}</p>
            <p>Breed: {dog.breed}</p>
            <p>Sex: {dog.sex}</p>
            <p>Age: {dog.age}</p>
        </div>
    );
}
export default InformationPage;