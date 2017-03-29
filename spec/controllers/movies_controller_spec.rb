require 'rails_helper'

RSpec.describe MoviesController, type: :controller do

  describe 'GET #index' do
    it 'populates an array of movies' do
      get :index
      expect(assigns(:movies)).to be_a_kind_of(Array)
    end

    it 'renders the :index view' do
      get :index
      expect(response).to render_template :index
    end
  end

end