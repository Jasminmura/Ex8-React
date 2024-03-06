import React, { useState, useEffect } from 'react';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [enlargedPhoto, setEnlargedPhoto] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      const newPhotos = [];

      for (let i = 0; i < 20; i++) {
        newPhotos.push({
          id: i + 1,
          url: `https://picsum.photos/300?random=${i + 1}`,
        });
      }

      setPhotos(newPhotos);
    };

    fetchPhotos();
  }, []);

  const enlargePhoto = (photo) => {
    setEnlargedPhoto(photo);
  };

  const closeEnlarged = () => {
    setEnlargedPhoto(null);
  };

  return (
    <div>
      <div className="photos-container">
        {photos.map((photo) => (
          <div key={photo.id} className="photo" onClick={() => enlargePhoto(photo)}>
            <img src={photo.url} alt="Random Photo" />
          </div>
        ))}
      </div>

      {enlargedPhoto && (
        <div className="enlarged" onClick={closeEnlarged}>
          <img src={enlargedPhoto.url} alt="Enlarged Photo" />
        </div>
      )}
    </div>
  );
};

export default App;
