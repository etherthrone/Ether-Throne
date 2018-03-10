import { userConstants } from '../constants/user.constants';

let userActions = {
    getAccountInfoError: function(err) {
      return {
          err,
          type: userConstants.GET_DETAIL_FAILURE
      };
    },
    getAccountInfoSuccess: function(response) {
        return {
            response,
            type: userConstants.GET_DETAIL_SUCCESS
        };
    },
    getAccountInfo: function(wallet, cb){
        let _obj = this;
        return dispatch => {
            fetch(process.env.REACT_APP_BACKEND_ENDPOINT_URL + 'users/detail?wallet=' + wallet, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
              if(response.ok){
                  response.json().then(function(res) {
                      dispatch(_obj.getAccountInfoSuccess(res));
                      if(cb != null)
                          cb();
                  });
              }else{
                  response.json().then(function(res) {
                      let _error = {
                          status: response.statusText,
                          error: res
                      };
                      dispatch(_obj.getAccountInfoError(_error));
                      if(cb != null)
                          cb();
                  });
              }
            })
            .catch(error => {
                dispatch(_obj.getAccountInfoError(error));
                if(cb != null)
                    cb();
            })
        }
    },

    saveAccountInfoError: function(err) {
        return {
            err,
            type: userConstants.SAVE_ACCOUNT_INFO_FAILURE
        };
    },
    saveAccountInfoSuccess: function(response) {
        return {
            response,
            type: userConstants.SAVE_ACCOUNT_INFO_SUCCESS
        };
    },
    saveAccountInfo: function(data, cb){
        let _obj = this;
        return dispatch => {
            let _apiBody = "email="+data.email+"&wallet="+data.wallet+"&name="+data.nickname;
            fetch(process.env.REACT_APP_BACKEND_ENDPOINT_URL + 'users/', {
                method: 'POST',
                body: _apiBody,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then(response => {
                if(response.ok){
                    response.json().then(function(res) {
                        dispatch(_obj.saveAccountInfoSuccess(res));
                        if(cb != null)
                            cb();
                    });
                }else{
                    response.json().then(function(res) {
                        let _error = {
                            status: response.statusText,
                            error: res
                        };
                        dispatch(_obj.saveAccountInfoError(_error));
                        if(cb != null)
                            cb();
                    });
                }
            })
            .catch(error => {
                dispatch(_obj.saveAccountInfoError(error));
                if(cb != null)
                    cb();
            })
        }
    }
};

export default userActions;