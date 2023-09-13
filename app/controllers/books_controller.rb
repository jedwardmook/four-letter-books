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

    # def show_images
    #     book = Book.find_by(id: params[:params])
    #     images = book.images

    #     if images.present?
    #         images.each do |image|
    #             {
    #                 url: rails_blob_url(image),
    #                 filename: image.filename.to_s,
    #                 content_type: image.content_type
    #               }
    #         end
    #     render json: {images: images}
    #     else
    #         render json: {error: 'Images not found' },status: :not_found
    #     end
    # end

    def update
        book = Book.find_by(id: params[:id])
        if book
            book.update( book_params)
            render json: book, status: :accepted
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
