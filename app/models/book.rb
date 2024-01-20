class Book < ApplicationRecord
    validates :title, presence: true
    has_many_attached :images

    def image_urls
        if images.attached?
            images.map do |image|
                {
                    id: image.id,
                    file_name: image.filename,
                    url: Rails.application.routes.url_helpers.rails_blob_path(image, only_path: true)
                }
            end
        else
            []
        end
    end

end
