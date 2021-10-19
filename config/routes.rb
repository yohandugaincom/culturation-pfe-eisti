Rails.application.routes.draw do
  root 'pages#home'
  get 'maquette2/search'
  get 'maquette4/profil'
  get 'maquette4/signup'
  get 'maquette4/mail_confirmed'
  get 'maquette4/connect'
  get 'maquette4/confirm_mail'
  get 'maquette4/sv'
  get 'maquette4/history'
  get 'maquette4/settings'
  get 'maquette4/preferences'
  get 'maquette34/signaler'
  get 'maquette38/acquisition_stats'
  get 'maquette38/activity_stats'
  get 'maquette38/contents_datas'
  get 'maquette38/datas'
  get 'maquette38/interest_stats'
  get 'maquette38/overview_stats'
  get 'maquette38/overview_datas'
  get 'maquette38/stats'
  get 'maquette38/users_datas'
  get 'maquette38/users'
  get 'maquette38/quarantaines_datas'

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
