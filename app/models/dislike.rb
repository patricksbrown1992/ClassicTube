class Dislike < ApplicationRecord

    validates :user_id, :video_id, presence: true
    validates_uniqueness_of :user_id, scope: [:video_id]
    belongs_to :user
    belongs_to :video

end