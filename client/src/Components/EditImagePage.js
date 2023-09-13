import React from 'react'
import { useLocation } from 'react-router-dom'

function EditImagePage() {
    const location = useLocation()
    console.log(location.state)

    return(
        <h1>Hello from Edit Image Page</h1>
    )
    
}

export default EditImagePage