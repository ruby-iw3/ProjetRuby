class Article < ApplicationRecord
    validates_presence_of :title, :content, :created_by

    has_many :comments, dependent: :destroy
end
