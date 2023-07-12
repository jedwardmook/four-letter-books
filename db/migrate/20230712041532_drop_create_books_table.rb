class DropCreateBooksTable < ActiveRecord::Migration[6.1]
  def change
    drop_table :create_books
  end
end
