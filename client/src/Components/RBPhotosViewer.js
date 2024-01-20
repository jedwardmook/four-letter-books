import React from 'react'

function RBPhotosViewer({photos}) {

    const photosToDisplay = photos?.map((photo) => {
        return <img src={photo} alt={photo}/>
    })

  return (
    <div>
        {photos.length > 0? photosToDisplay : <img src='https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg' alt='Not available'/>}
    </div>
  )
}

export default RBPhotosViewer