module Api
  module V1
    class GroupsController < ApplicationController
      before_action: find_group, only[delete:,show:,update:]

      def find_group
        @group = @user.groups.find(params[:id])
      end

      def dashboard
        @group = @user.groups
        render json: @group, include: %i[sensors], root: "groups"
      end

      def index; end

      def create
        group = Group.new((group_params))
        group.user_id = @user.id
        if group.valid?
          group.save!
          render json: group
        else
          puts "FALSE"
          render json: group.errors
        end
      end

      def show
        @group = Group.find(params[:id])
        render json: @group
      end

      def update ;end

      def destroy; end

      private

      def group_params
        params.permit(:name, :hardware_id)
      end
    end
  end
end
