json.extract! album, :id, :title, :photos, :created_at, :updated_at
json.url album_url(album, format: :json)
json.photos do
  json.array!(album.photos) do |photo|
    json.id photo.id
    json.url url_for(photo)
  end
end
