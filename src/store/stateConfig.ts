import { StateConfig } from 'booto';
import CounterModule from './modules/counter';
import UserModule from './modules/user';
import LayoutModule from './modules/layout';

const stateConfig: StateConfig = [
  CounterModule,
  UserModule,
  LayoutModule
];

export default stateConfig;