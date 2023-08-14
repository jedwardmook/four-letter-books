Book.destroy_all
Book.reset_pk_sequence

Book.create!(
    title: "Fake Book", 
    subtitle: "Subtitle", 
    author: "author", 
    description: "A description about the book", 
    publisher: "Publisher", 
    year_published: "A year here", 
    cover_type: "Paperback", 
    isbn_10: 1111111111, 
    isbn_13: 1111111111, 
    page_number: 123,
    measurements: "some measurement", 
    language: "Eng",
    condition: "Like new" ,
    price: 19,
    genre1: "One",
    genre2: "Genre",
    genre3: "Again",
)