import React from 'react';
import { connect } from 'booto';
import styles from './card.scss';

const Card = (props: any) => {
  const asyncAdd = () =>{
    props.dispatch({
      type: 'counter/count/add',
      payload: new Promise(resolve => setTimeout(()=>resolve(1), 1000))
    })
  };
  return (<button className={styles.button} onClick={()=> asyncAdd() }>async Ad1d</button>)
};

export default connect()(Card)