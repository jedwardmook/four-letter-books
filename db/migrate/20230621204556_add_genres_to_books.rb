class AddGenresToBooks < ActiveRecord::Migration[6.1]
  def change
    add_column :books, :genres, :string, array: true, default:[]
  end
end
