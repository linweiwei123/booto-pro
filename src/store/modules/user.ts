export const M_USER = 'user';

const add = (history = [], payload: any) => payload ? [...history, payload] : history;

const UserModule = {
  module: M_USER,
  state: {
    history: []
  },
  reducers: {
    history: {
      add
    }
  }
};

export default UserModule;