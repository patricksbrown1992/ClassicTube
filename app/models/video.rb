class Video < ApplicationRecord
    validates :title, :runtime, :year, :views, :user_name, :likes, :dislikes, :user_id, :description, presence: true
    validates :title, uniqueness: true
    has_one_attached :movie
    has_one_attached :thumbnail
    belongs_to :user
    
end