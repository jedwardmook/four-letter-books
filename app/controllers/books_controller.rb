class BooksController < ApplicationController

    def index
        books = Book.all.order(id: :asc)
        render json: books
    end

    def show
        book = Book.find_by(id: params[:id])
        if book
            render json: book
        else
            render json: { error: "Book not found" }, status: :not_found
        end
    end

    def update
        book = Book.find_by(id: params[:id])
        if book
            book.update(book_params)
            if params[:images]
                book.images.attach(params[:images])
            end
            render json: book, status: :accepted
        else
            render json: { error: "Book not found"}, status: :not_found
        end
    end

    def remove_image
        book = Book.find_by(id: params[:params1])
        if book
            image = book.images.find_by(id: params[:params2])
                if image
                    image.purge
                    render json: book, status: :accepted
                else
                    render json: {error: "Image not found"}, status: :not_found
                end
        else
            render json: { error: "Book not found"}, status: :not_found
        end
    end

    def create
        book = Book.create!(book_params)
        book.images.attach(params[:images])
        render json: book, status: :created
    rescue ActiveRecord::RecordInvalid => e
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end

    def destroy
        book = Book.find_by(id: params[:id])
        if book
            book.destroy
            head :no_content
        else
            render json: {errors: "Book not found"}, status: :not_found
        end
    end


    private

    def book_params
        params.require(:book).permit(:title, :subtitle, :author, :description, :publisher, :year_published, :cover_type, :isbn_10, :isbn_13, :page_number, :measurements, :language, :condition, :price, :genre1, :genre2, :genre3, :quantity, images:[])
    end

end
