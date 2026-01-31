export const ENV = {
  PORT: Number(process.env.PORT) || 5000,
  DB_URL: process.env.DB_URL as string,
};
