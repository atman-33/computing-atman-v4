export const apiEnv: IApiEnv = {
  isProd: process.env.ATMAN_ENV === 'production',
  api: {
    port: Number(process.env.ATMAN_API_PORT),
  },
  db: {
    url: process.env.ATMAN_DB_URL,
  },
};

export interface IApiEnv {
  isProd: boolean;
  api: {
    port: number;
  };
  db: {
    url: string;
  };
}
