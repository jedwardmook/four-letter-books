import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../Styles/editimagepage.min.css';

function EditImagePage() {
    const location = useLocation()
    const navigate = useNavigate()

    const backOnClick = () => {
        navigate(`/books/${location.state.book.id}`)
    }

    const removeImage = (e) => {
        e.preventDefault()
        fetch(`/remove_image/${location.state.book.id}/image/${location.state.image_url.id}`, {
            method: "PATCH",
            body: location.state.image_url,
          })
          .then((response) => {
            if (response.ok) {
                response.json().then((data) => {
                    console.log(data)
                    navigate(`/books/${location.state.book.id}`)
                });
            } else {
                response.json().then((error) => console.log(error));
            }
          });
    }

    return(
        <main className='edit_image_page_main'>
            <div className='edit_image_div'>
                <button onClick={backOnClick}className='edit_image_cancel'>X</button>
                <img className="edit_image_edit" src={location.state.image_url.url} alt={location.state.image_url.file_name}/>
                <div>
                    <button onClick={removeImage} className='edit_image_delete'>Delete</button>
                </div>
            </div>
        </main>
    )
    
}

export default EditImagePage