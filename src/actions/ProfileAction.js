import {callApi} from '../services/ApiCall';
import ApiConstant from '../services/ApiConstant'
import {USER_DETAIL} from "./Type";
import _ from 'lodash';
import axios from "axios";

// export const updateUser=(user)=>{
//     return(dispatch,getState)=>{
//         return callApi(ApiConstant.baseUrl+ApiConstant.signUp+`/${user.user_id}`,'put',user,{}).then((res)=>{
//             dispatch({
//                 type:USER_DETAIL,
//                 payload:res
//             });
//             return Promise.resolve(res);
//
//         }).catch((err)=>{
//             debugger
//         })
//     }
//
// };
export const updateUser=(user)=>{
    return(dispatch,getState)=>{
        const data= new FormData();
        data.append('first_name',user.first_name);
        data.append('last_name',user.last_name);
        data.append('email',user.email);
        data.append('mobile_no',user.mobile_no);
        if (user.profile_pic != '') {
            data.append('profile_pic', user.profile_pic);
        }

        // axios.post(ApiConstant.baseUrl+ApiConstant.updateProfile,data,{headers:{'Content-Type': 'multipart/form-data',
        //         "Authorization":getState().user.userDetail.token}})
        //     .then((response) => {
        //         dispatch({
        //             type:USER_DETAIL,
        //             payload:response.data
        //         })
        //         return Promise.resolve(userData);
        //     })
        //     .catch((err) => {
        //         debugger
        //         return Promise.reject(err);
        //     });
        // return Promise.all([
        //     dispatch({
        //         type:USER_DETAIL,
        //         payload:response.data
        //     })
        // ]).then(r=>{
        //     return Promise.resolve(response.data)
        // });

        return callApi(ApiConstant.baseUrl+ApiConstant.updateProfile,'post',data,{'Content-Type': 'multipart/form-data',
                                                                                                                "Authorization":getState().user.userDetail.token}).then((res)=>{


                                                                                                                    debugger
            // let userData = getState().user.userDetail;
            // let userObject = _.find(userData,{user_id:user.user_id});
            // let index = _.findIndex(userData, userObject);
            // userData[index].profile_pic=user.profile_pic;
            // userData[index].username=user.username;
            // userData[index].email=user.email;
            // userData[index].mobile_no=user.mobile_no;
            dispatch({
                type:USER_DETAIL,
                payload:res.data
            })
            return Promise.resolve(res.data);

        }).catch((err)=>{
            debugger
        })
    }
};

// export const getUser=()=>{
//     return(dispatch,getState)=>{
//         return callApi(ApiConstant.baseUrl+ApiConstant.signUp,'get',{},{}).then((res)=>{
//             const data=res;
//             dispatch({
//                 type:USER_DETAIL,
//                 payload:data
//             });
//             return Promise.resolve(res);
//
//         }).catch((err)=>{
//             debugger
//         })
//     }
//
// };