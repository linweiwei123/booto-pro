import React from 'react';
import { connect } from 'booto';
import { push } from 'connected-react-router';
import { DatePicker } from 'antd';

// time format function
export function formatDate2(date: Date) {
  let d = date,
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear(),
    hour = '' + d.getHours(),
    minute = '' + d.getMinutes(),
    second = '' + d.getSeconds();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  if (hour.length < 2) hour = '0' + hour.toString();
  if (minute.length < 2) minute = '0' + minute.toString();
  if (second.length < 2) second = '0' + second.toString();
  return [year, month, day].join('-') + ' ' + [hour, minute, second].join(':');
}

export interface IActionHistory {
  action: string,
  time: number
}

const User = (props:any) => {
  const { dispatch, routePush} = props;

  function onChange(date: any, dateString: any) {
    console.log(date, dateString);
  }

  return (
    <div>
      <div className="link" onClick={()=> dispatch(routePush('/'))}>goto back</div>
      <h1>user option records12：1</h1>
      <ul>
        {props.history.map((item: IActionHistory, index:number) => (
          <li key={index}>
            <span className="time">{formatDate2(new Date(item.time))}</span>
            <span>{item.action}</span>
          </li>
        ))}
      </ul>
      <DatePicker onChange={onChange} />
    </div>
  )
};

export default connect((state:any) =>({history: state.user.history}), {routePush: push})(User)