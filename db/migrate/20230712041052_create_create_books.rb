class CreateCreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :subtitle
      t.string :author
      t.text :description
      t.string :publisher
      t.integer :year_published
      t.string :cover_type
      t.integer :isbn_10
      t.integer :isbn_13
      t.integer :page_number
      t.string :measurements
      t.string :language
      t.string :condition
      t.integer :price
      t.string :genre1
      t.string :genre2
      t.string :genre3
      t.timestamps
    end
  end
end
