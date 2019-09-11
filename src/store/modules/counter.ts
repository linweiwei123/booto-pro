export const M_COUNTER = 'counter';

const add = (count: number) => count + 1;
const minus = (count: number) => count - 1;

const CounterModule = {
  module: M_COUNTER,
  state: {
    count: 0
  },
  reducers: {
    count: {
      add,
      minus
    }
  }
};

export default CounterModule;