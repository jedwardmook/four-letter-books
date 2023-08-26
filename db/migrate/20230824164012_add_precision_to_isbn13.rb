class AddPrecisionToIsbn13 < ActiveRecord::Migration[6.1]
  def change
    change_column :books, :isbn_13, :integer, precision: 13
  end
end
