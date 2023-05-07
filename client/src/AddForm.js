import React, { useState } from 'react'

function AddForm({book, author, descriptionArray}) {
    const {title, subtitle, publishers, publish_date, physical_format} = book
    const {name} = author

    const [bookTitle, setBookTitle] = useState(title)
    const [bookSubtitle, setBookSubtitle] = useState(subtitle)
    const [authorName, setAuthorName] = useState(name)
    const [bookDescription, setBookDescription] = useState(descriptionArray)
    const [publisher, setPublisher] = useState(publishers)
    const [publishDate, setPublishDate] = useState(publish_date)
    const [physicalFormat, setPhysicalFormat] = useState(physical_format)
    const [price, setPrice] = useState()
  
    return (
    <form>
          <input
            placeholder='Title'
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
          />
          <input
            placeholder='Subtitle'
            value={bookSubtitle}
            onChange={(e) => setBookSubtitle(e.target.value)}
          />
          <input
            placeholder='Author'
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
          <input
            placeholder='Description'
            value={bookDescription}
            onChange={(e) => setBookDescription(e.target.value)}
          />
          <input
            placeholder='Publisher'
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
          />
          <input
            placeholder='Published Date'
            value={publishDate}
            onChange={(e) => setPublishDate(e.target.value)}
          />
          <input
            placeholder='Format'
            value={physicalFormat}
            onChange={(e) => setPhysicalFormat(e.target.value)}
          />
          <input
            placeholder='Price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </form>
  )
}

export default AddForm