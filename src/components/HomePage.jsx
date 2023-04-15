import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
    return (
        <div className='Greetings'>
            <h1>Welcome to Doggy Daycare</h1>
            <h3>A safe second home for your dog when you can't be there!</h3>
            <nav>
                <ul>

                    <li><Link to="/Catalog">Catalog for our registered dogs</Link></li>
                </ul>
            </nav>
        </div>

    );
}

export default HomePage;