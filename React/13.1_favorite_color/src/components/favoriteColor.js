import React from 'react';

const FavoriteColor = () => {
    const [favoriteColor] = React.useState('blue');
    
    return (
        <div>
        <h1>My favorite color is {favoriteColor}</h1>
        </div>
    );
}
 
export default FavoriteColor;