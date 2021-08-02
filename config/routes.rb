Rails.application.routes.draw do
  root to: 'posts#index'
  post 'posts', to: 'posts#create'
end



# AjaxAppは、投稿されたメモ一覧をトップページに表示する仕様にする。
# posts#indexへのパスを、ルートパスに変更。
# 新規投稿ページへの遷移は行わないため、元からあった
# get 'posts/new', to: 'posts#new'の記述は削除。

# get 'posts', to: 'posts#index'から
# root to: 'posts#index'へ変更