module Api
  module V1
    class GroupsController < ApplicationController
      skip_before_action :verify_authenticity_token

      def dashboard
        @group = Group.all
        render json: @group, include: %i[sensors], root: "groups"
      end

      def index; end

      def create
        group = Group.create!((group_params))
        if group
          render json: group
        else
          render json: group.errors
        end
      end

      def show
        @group = Group.find(params[:id])
        render json: @group
      end

      def destroy; end

      private

      def group_params
        params.require(:group).permit(:name, :hardware_id)
      end
    end
  end
end
