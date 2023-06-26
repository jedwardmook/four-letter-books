class AddIsbn10ToBooks < ActiveRecord::Migration[6.1]
  def change
    add_column :books, :isbn_10, :integer
  end
end
