class BooksController < ApplicationController

    def create
        book = Book.create!(book_params)
        render json: book, status: :created
    rescue ActiveRecord::RecordInvalid => e
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end


    private

    def book_params
        params.require(:book).permit(:title, :subtitle, :author, :description, :publisher, :year_published, :cover_type, :isbn_10, :isbn_13, :page_number, :measurements, :language, :condition, :price, :genre1, :genre2, :genre3)
    end

end
