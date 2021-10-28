class Album < ApplicationRecord
  has_many_attached :photos
  extend FriendlyId
  friendly_id :title, use: :slugged
end
