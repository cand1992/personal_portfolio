class Api::PostsController < ApplicationController
	before_action :set_blog

	def index
		render json: @blog.posts
	end

	def create
		@post = @blog.posts.new(post_params)
		if @post.save
			render json: @post
		else
			render json: { errors: @post.errors }, status: :unprocessable_entity
		end
	end

	def update
		@post = @blog.posts.find(params[:id])
		if @post.update(post_params)
			render json: @post
		else
			render json: { errors: @post.errors }, status: :unprocessable_entity
		end
	end

	def destroy
		@blog.posts.find(params[:id]).destroy
		render json: { message: 'Post Deleted Successfully.' }
	end

	private
	def post_params
		params.require(:post).permit(:title, :body)
	end

	def set_blog
		@blog = Blog.find(params[:blog_id])
	end

end
