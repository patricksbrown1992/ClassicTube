class AddUsersColumnToVideos < ActiveRecord::Migration[5.2]
  def change
    add_column :videos, :user_id, :integer, null: false
  end
end
