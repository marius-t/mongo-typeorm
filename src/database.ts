import { createConnection, Connection, ConnectionOptions } from 'typeorm';

const connectionOpts: ConnectionOptions = {
    type: 'mongodb',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 27017,
    username: encodeURIComponent(process.env.DB_USERNAME || 'marius'),
    password: encodeURIComponent(process.env.DB_PASSWORD || 'marius'),
    database: process.env.DB_NAME || 'testapi',
    entities: [
       `${__dirname}/entity/**/*.ts`
    ],
    synchronize: true,
  };
  
  const connection:Promise<Connection> = createConnection(connectionOpts);
  
  export default connection;