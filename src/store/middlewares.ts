import { Action } from 'booto';

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