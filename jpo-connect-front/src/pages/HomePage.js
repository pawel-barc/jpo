import React from 'react';
import plateformeImage from '../images/jpo.png';

const HomePage = () => {
    const photoStyle = {
        backgroundImage: `url(${plateformeImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '600px', // Możesz dostosować wysokość zdjęcia według własnych potrzeb
        width: '100%', // Ustaw szerokość na 100%
        color: 'white' // Ustaw kolor tekstu, aby był widoczny na tle
    };
    const headingStyle = {
        marginTop: '20px', // Ustaw margines górny (dostosuj według potrzeb)
        textAlign: 'center', // Wyśrodkowanie tekstu
        fontSize: '3rem', // Ustawienie wielkości czcionki (dostosuj według potrzeb)
        fontWeight: 'bold' // Opcjonalnie, aby nadać pogrubioną czcionkę
    };

    return (
        <div>
            <div className="photo-container" style={photoStyle}>
                {/* Treść, która ma być wyświetlana na tle zdjęcia */}
                <h1 style={headingStyle}>Welcome to Our Platform</h1>
            </div>
            <div>Homepage</div>
        </div>
    );
};

export default HomePage;
