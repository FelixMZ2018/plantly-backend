import ApiCall from "../apis/ApiCall";

export const triggerModal = (modalprops) => {
  return {
    type: "CHANGE_MODAL",
    payload: {
      isShown: modalprops.isShown,
      type: modalprops.type,
      action: modalprops.action,
      id: modalprops.id,
      modalContent: modalprops.modalContent,
      group_id: modalprops.group_id
    },
  };
};

export const DashboardApiCallAction = () => {
  return async (dispatch) => {
    const response = await ApiCall.get("/dashboard");
    dispatch({
      type: "DASHBOARD_API_INDEX",
      payload: response,
    });
  };
};


