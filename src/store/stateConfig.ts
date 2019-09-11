import { StateConfig } from 'booto';
import CounterModule from './modules/counter';
import UserModule from './modules/user';

const stateConfig: StateConfig = [
  CounterModule,
  UserModule
];

export default stateConfig;