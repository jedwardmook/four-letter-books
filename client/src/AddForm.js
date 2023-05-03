import React, { useState } from 'react'

function AddForm({book, author, work}) {
    const [title, setTitle] = useState(book.title)
    const [subtitle, setSubtitle] = useState(book.subtitle)
    const [name, setName] = useState(author.name)
    const [description, setDescription] = useState(work.description.value)
    const [publisher, setPublisher] = useState(book.publishers)
    const [publishDate, setPublishDate] = useState(book.publish_date)
    const [physicalFormat, setPhysicalFormat] = useState(book.physical_format)
    const [price, setPrice] = useState(book.price)
  
    return (
    <form>
          <input
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            placeholder='Subtitle'
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />
          <input
            placeholder='Author'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder='Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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