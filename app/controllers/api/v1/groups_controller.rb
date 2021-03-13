module Api
  module V1
    class GroupsController < ApplicationController
#      before_action :find_group, only: %i[show delete update]
#      rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
#
#      def record_not_found
#        render json: { message: "Group not found" }, status: 404
#      end
#
#      def find_group
#        @group = @user.groups.find(params[:id])
#      end
#
#      def dashboard
#        @group = @user.groups
#        render json: @group, include: %i[sensors], root: "groups"
#      end
#
#      def index; end
#
#      def create
#        group = Group.new((group_params))
#        group.user_id = @user.id
#        group.hardware_id = SecureRandom.uuid
#        if group.valid?
#          group.save!
#          render json: group
#        else
#          render json: group.errors
#        end
#      end
#
#      def show
#        render json: @group
#      end
#
#      def update; end
#
#      def destroy; end
#
#      private
#
#      def group_params
#        params.permit(:name)
#      end
    end
  end
end
