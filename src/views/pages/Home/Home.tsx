import React from 'react';
import Card from './Card'
import { connect } from 'booto';
import { push } from 'connected-react-router';

function Home(props: any) {

  const { dispatch, routePush} = props;

  return (
    <div className="home">
      <div>{props.count}</div>
      <button onClick={() => props.dispatch('counter/count/add')}>A2dd</button>
      <button onClick={() => props.dispatch('counter/count/minus')}>minus</button>
      <Card/>
      <div className="link" onClick={()=> dispatch(routePush('/user'))}>goto User history</div>
    </div>
  );
}

export default connect(
  ({counter}: any) => ({count: counter.count}), {routePush: push }
)(Home);
