import {fetchGroupsPending, fetchGroupsSuccess, fetchGroupsError} from '../reducers/index';

//function fetchGroups() {
//    return dispatch => {
//        dispatch(fetchGroupsPending());
//        fetch('/api/v1/plants')
//        .then(res => res.json())
//        .then(res => {
//            if(res.error) {
//                throw(res.error);
//            };
//            dispatch(fetchGroupsSuccess(res.groups);
//            return res.groups;
//        })
////        .catch(error => {
////            dispatch(fetchGroupsError(error));
////        })
//    }
//}
//
//export default fetchGroups;
