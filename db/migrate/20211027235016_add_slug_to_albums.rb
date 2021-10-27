class AddSlugToAlbums < ActiveRecord::Migration[6.1]
  def change
    add_column :albums, :slug, :string
    add_index :albums, :slug, unique: true
  end
end
