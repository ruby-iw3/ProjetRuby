Rails.application.routes.draw do
  namespace :api do
    resources :articles 
    resources :comments
    resources :categories

    get 'articles/:id/comments', to: 'articles#get_comments'
    get 'categories/:id/articles', to: 'categories#get_articles'
    get 'articles/:id/categories', to: 'articles#get_categories'
  end
  
end