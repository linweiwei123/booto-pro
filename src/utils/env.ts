const ENV = {
  DEV: 'development',
  PRO: 'production'
};

export const isDev = process.env.NODE_ENV === ENV.DEV;
export const isPro = process.env.NODE_ENV === ENV.PRO;

