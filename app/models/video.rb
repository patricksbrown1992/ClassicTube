class Video < ApplicationRecord
    validates :title, :runtime, :year, :user_id, :description, presence: true
    validates :title, uniqueness: true
    has_one_attached :movie
    has_one_attached :thumbnail
    belongs_to :user
end