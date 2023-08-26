class AddBigintToIsbn13 < ActiveRecord::Migration[6.1]
  def change
    change_column :books, :isbn_13, :bigint
  end
end
