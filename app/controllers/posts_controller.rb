class PostsController < ApplicationController

  def index
    @posts = Post.order(id: "DESC")
  end

  # def new
  # end　今回は不要のため

  def create
    # binding.pry
    post = Post.create(content: params[:content])
    #redirect_to action: :index  メモを保存した後にトップページへリダイレクトの為追記する
    render json:{ post: post }
  end
end




# メモを降順、つまり、投稿の新しい順に表示されるようにする、下記
# @posts = Post.order(id: "DESC")

# renderメソッドを用いて、レスポンスのデータフォーマットとしてJSONを指定