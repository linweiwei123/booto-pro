import { Action } from 'booto';
import { isPromise } from '../utils/common';

export const actionRecord = (store:any) => (next:any) => (action: Action) =>{
  if(action.type !== 'user/history/add'){
    store.dispatch({
      type: 'user/history/add',
      payload: {
        action: action.type,
        time: new Date().getTime()
      }
    });
    next(action)
  }
  else {
    next(action)
  }
};

export const promiseMiddle = (store: any) => (next: any) => (action: any) => {
  if(!isPromise(action.payload)){
    return next(action);
  }

  // 预留：dispatch 请求开始
  action.payload
    .then((res: any) => {
      action.payload = res;
      // 预留：dispatch 请求结束
      store.dispatch(action);
    })
    .catch((err: Error) => {
      action.isError = true;
      action.payload = err;
      // 预留：dispatch 请求结束
      store.dispatch(action);
    })

};