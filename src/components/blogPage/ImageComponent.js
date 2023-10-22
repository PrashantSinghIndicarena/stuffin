import React, { useState, useEffect } from 'react';

function ImageComponent({ featuredMediaLink }) {
    const [imageURL, setImageURL] = useState('');

    useEffect(() => {
        const fetchImageURL = async () => {
            try {
                const response = await fetch(featuredMediaLink);
                const data = await response.json();
                console.log(data);
                setImageURL(data.guid.rendered); // Assuming 'link' holds the image URL
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };

        fetchImageURL();
    }, [featuredMediaLink]);

    return (
        <img src={imageURL} alt="/" />
    );
}

export default ImageComponent;
