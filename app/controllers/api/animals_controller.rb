class Api::AnimalsController < ApplicationController
  before_action :set_product, only: [:show, :update, :destroy]

  def index
    render json: Animal.all
  end

  def show
    render json: @animal
  end

  def create
    animal = Animal.new(animal_params)

    if animal.save
      render json: animal
    else
      render json: animal.errors, status: 422
    end
  end

  def update
    if @animal.update(animal_params)
      render json: @animal
    else
      render json: @animal.errors, status 422
    end
  end

  def destroy
    @aniaml.destroy
  end

  private
    def set_animal
      @animal = Animal.find(params[:id])
    end

    def animal_params
      params.require(:animal).permit(:name, :description, :type)
    end
end
