class HomeController < ApplicationController
  def index
    @posts = [
      { id: 1, spell: 'abc' },
      { id: 2, spell: 'def' },
      { id: 3, spell: 'ghi' },
    ].map {|post| OpenStruct.new(post)}
  end
end
