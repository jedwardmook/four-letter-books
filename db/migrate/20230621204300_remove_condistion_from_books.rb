class RemoveCondistionFromBooks < ActiveRecord::Migration[6.1]
  def change
    remove_column :books, :condistion, :string
  end
end
