class RemoveIsbn8FromBooks < ActiveRecord::Migration[6.1]
  def change
    remove_column :books, :isbn_8, :integer
  end
end
