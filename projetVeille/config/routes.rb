Rails.application.routes.draw do
  namespace :api do
    resources :articles 
    resources :comments

    get 'articles/:id/comments', to: 'articles#get_comments'
  end
  
end
