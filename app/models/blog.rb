class Blog < ApplicationRecord
	validates :category, presence: true
	validates :category, uniqueness: true
	has_many :posts, dependent: :destroy
end
