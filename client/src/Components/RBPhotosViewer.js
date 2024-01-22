import React, { useState } from 'react'

function RBPhotosViewer({photos}) {
    const [heroPhoto, setHeroPhoto] = useState(photos[0])

    const photosToDisplay = photos?.map((photo) => {
        return <img key={photo} src={photo} alt={photo}/>
    })

    

  return (
    <div>
        {photos.length > 0? photosToDisplay : <img src='https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg' alt='Not available'/>}
        {photos.length > 0? <img src={heroPhoto} alt='book'/> : <img src='https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg' alt='Not available'/>}
    </div>
  )
}

export default RBPhotosViewer