class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :price, :author, :publisher, :year_published, :isbn_8, :isbn_13, :description, :cover_type, :measurements, :condistion, :page_number, :language, :genres
end
