export const webEnv: IWebEnv = {
  isProd: process.env.ATMAN_ENV === 'production',
  api: {
    gqlUrl: process.env.ATMAN_WEB_GQL_URL as string,
  },
  storage: {
    url: process.env.ATMAN_WEB_STORAGE_URL as string,
    endpoint: process.env.ATMAN_WEB_STORAGE_ENDPOINT as string,
  },
};

export interface IWebEnv {
  isProd: boolean;
  api: {
    gqlUrl: string;
  };
  storage: {
    url: string;
    endpoint: string;
  };
}
