class AddConditionToBooks < ActiveRecord::Migration[6.1]
  def change
    add_column :books, :condition, :string
  end
end
