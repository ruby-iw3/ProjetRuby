class Api::CategoriesController < ApplicationController
	before_action :set_category, only: [:show, :update, :destroy, :get_articles]

	# GET /categories
    def index
        @categories = Category.order('created_at DESC')

        render json: {status: 'SUCCESS', message: 'Loaded categories', data: @categories}, status: :ok
    end

    # GET /category/:id
    def show
        render json: {status: 'SUCCESS', message: 'Loaded category', data: @category}, status: :ok
    end

    # POST /categories
    def create
        @category = Category.new(category_params)

        if @category.save
            render json: {status: 'SUCCESS', message: 'Saved category', data: @category}, status: :created
        else
            render json: {status: 'ERROR', message: 'category not saved', data: @category.errors}, status: :bad_request
        end
    end

    # PATCH/PUT /categories/:id
    def update
        if @category.update(category_params)
            render json: {status: 'SUCCESS', message: 'Updated category', data: @category}, status: :ok
        else
            render json: {status: 'SUCCESS', message: 'category not updated', data: @category.errors}, status: :unprocessable_entity
        end
    end

    # DELETE /categories/:id
    def destroy
        @category.destroy
        render json: {status: 'SUCCESS', message: 'Deleted category', data: @category}, status: :ok
    end

    # GET /categories/:id/articles
    def get_articles
        render json: @category.articles
    end

    private

    def set_category
        @category = Category.find(params[:id])
    end

    def category_params
        params.permit(:title)
    end
end