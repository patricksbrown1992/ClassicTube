class Like < ApplicationRecord
    
    validates :user_id, :video_id, presence: true
    validates_uniqueness_of :user_id, scope: [:video_id]
    
    

end