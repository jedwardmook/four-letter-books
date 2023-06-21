class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title
      t.integer :price
      t.string :author
      t.string :publisher
      t.integer :year_published
      t.integer :isbn_8
      t.integer :isbn_13
      t.text :description
      t.string :cover_type
      t.string :measurements
      t.string :condistion
      t.integer :page_number
      t.string :language

      t.timestamps
    end
  end
end
