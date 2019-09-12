import * as React from 'react';
import 'antd/dist/antd.css';
import './styles/index.scss';
import booto, { Middleware } from 'booto';
import { createLogger } from 'redux-logger';
import stateConfig from './store/stateConfig';
import { actionRecord, promiseMiddle } from './store/middlewares';
import { isDev } from './utils/env';
import App from './views/App';

booto.setup(stateConfig);

let middlewares: Middleware[] = [];
if(isDev){
  middlewares = [createLogger()]
}

booto.use(middlewares.concat([
  promiseMiddle,
  actionRecord
]));

export interface ICounter {
  count: number
}


booto.start(<App/>, '#root');