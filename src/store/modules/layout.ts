export const M_LAYOUT = 'layout';

const set = (status: boolean, payload: any) => payload;

const LayoutModule = {
  module: M_LAYOUT,
  state: {
    collapsed: false
  },
  reducers: {
    collapsed: {
      set
    }
  }
};

export default LayoutModule;