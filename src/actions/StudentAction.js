import {callApi} from '../services/ApiCall';
import ApiConstant from '../services/ApiConstant'
import _ from 'lodash';

import {ATTENDANCE_DETAIL, STUDENT_DETAIL} from "./Type";
import {applyMiddleware as dispatch} from "redux";

export const newStudent=(stud)=>{
    return(dispatch,getState)=>{
        return callApi(ApiConstant.baseUrl+ApiConstant.signIn,'post',stud,{}).then((res)=>{
            dispatch({
                type:STUDENT_DETAIL,
                payload:stud
            });
        }).catch((err)=>{
        })
    }
};

export const getStudents=()=>{
    return(dispatch,getState)=>{
        return callApi(ApiConstant.baseUrl+ApiConstant.getAllUser,'get',{},{"Authorization":getState().user.userDetail.token}).then((res)=>{
            dispatch({
                type:STUDENT_DETAIL,
                payload:res
            });
            return Promise.resolve(res);
        }).catch((err)=>{
        })
    }
};

export const deleteStudent=(id)=>{
    return(dispatch,getState)=>{
        return callApi(ApiConstant.baseUrl+ApiConstant.deleteUser,'post',id,{"Authorization":getState().user.userDetail.token}).then((res)=>{
            let studentData = getState().stud.studentDetail;
            let studObject = _.find(studentData.response, {id: id.id});
            // let studIndex = studentData.findIndex(studObject);
            let index = _.findIndex(studentData.response, studObject);
            studentData.response[index].is_active == 1 ? studentData.response[index].is_active = 0 : studentData.response[index].is_active = 1;
            dispatch({
                type:STUDENT_DETAIL,
                payload:_.cloneDeep(studentData)
            });
            return Promise.resolve(studentData);
        }).catch((err)=>{
            return Promise.reject(err);
        })
    }
};


export const deleteAdmin=(id)=>{
    return(dispatch,getState)=>{

        return callApi(ApiConstant.baseUrl+ApiConstant.deleteUser,'post',id,{"Authorization":getState().user.userDetail.token}).then((res)=>{

            let studentData = getState().stud.studentDetail;
            let studObject = _.find(studentData.response, {id: id.id});
            // let studIndex = studentData.findIndex(studObject);
            let index = _.findIndex(studentData.response, studObject);

            if (studentData.response[index].is_active == 1){
                studentData.response[index].is_active = 0

                //Status change for Student
                for (let i = 0; i<studentData.response.length; i++) {
                    let obj = studentData.response[i];

                    if (obj.parent_id) {
                        if (obj.parent_id == id.id) {
                            studentData.response[i].is_active = 0;
                        }
                    }
                }
            }else{
                studentData.response[index].is_active = 1;

                //Status change for Student
                for (let i = 0; i<studentData.response.length; i++) {
                    let obj = studentData.response[i];

                    if (obj.parent_id) {
                        if (obj.parent_id == id.id) {
                            studentData.response[i].is_active = 1;
                        }
                    }
                }
            }

            dispatch({
                type:STUDENT_DETAIL,
                payload:_.cloneDeep(studentData)
            });
            return Promise.resolve(studentData);
        }).catch((err)=>{

            return Promise.reject(err);
        })
    }
};


export const activeByAdmin=(id)=>{

    return(dispatch,getState)=>{
        return callApi(ApiConstant.baseUrl+ApiConstant.activeUser,'post',id,{"Authorization":getState().user.userDetail.token}).then((res)=>{
            let studentData = getState().stud.studentDetail;
            let studObject = _.find(studentData.response, {id: id.id});
            // let studIndex = studentData.findIndex(studObject);
            let index = _.findIndex(studentData.response, studObject);

            if (studentData.response[index].is_active == 1){
                studentData.response[index].is_active = 0
            }else{
                studentData.response[index].is_active = 1;
            }

            dispatch({
                type:STUDENT_DETAIL,
                payload:_.cloneDeep(studentData)
            });
            return Promise.resolve(studentData);
        }).catch((err)=>{
            return Promise.reject(err);
        })
    }
};


export const attendance=()=>{

    return(dispatch,getState)=>{

        return callApi(ApiConstant.baseUrl+ApiConstant.attendance,'get',{},{"Authorization":getState().user.userDetail.token}).then((res)=>{

            dispatch({
                type:ATTENDANCE_DETAIL,
                payload:_.cloneDeep(res)
            });
            return Promise.resolve(res);
        }).catch((err)=>{

            return Promise.reject(err);
        })
    }
};

export const attendanceByAdmin=(id)=>{

    return(dispatch,getState)=>{

        return callApi(ApiConstant.baseUrl+ApiConstant.attendance,'post',id,{"Authorization":getState().user.userDetail.token}).then((res)=>{


            dispatch({
                type:ATTENDANCE_DETAIL,
                payload:_.cloneDeep(res)
            });
            return Promise.resolve(res);
        }).catch((err)=>{
            return Promise.reject(err);
        })
    }
};

export const postNews=(id)=>{

    return(dispatch,getState)=>{

        return callApi(ApiConstant.baseUrl+ApiConstant.postNews,'post',id,{"Authorization":getState().user.userDetail.token}).then((res)=>{

            return Promise.resolve(res);
        }).catch((err)=>{
            return Promise.reject(err);
        })
    }
};

export const postComplain=(id)=>{

    return(dispatch,getState)=>{

        return callApi(ApiConstant.baseUrl+ApiConstant.complaint,'post',id,{"Authorization":getState().user.userDetail.token}).then((res)=>{

            return Promise.resolve(res);
        }).catch((err)=>{
            return Promise.reject(err);
        })
    }
};