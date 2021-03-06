/*export const users = [
        {
          name: 'Octavio Flores',
          email: 'oflores@zcorp.com',
          projects: [{title: 'Site Upgrade - Summer 2021'}]
        },
        {
          name: 'Farah Bennis',
          email: 'fbennis@zcorp.com',
          projects: [{title: 'Site Upgrade - Summer 2021'}]
        },
      ];

*/

//const { Client } = require('pg');
const { Pool } = require('pg');

import dotenv from 'dotenv';
dotenv.config();

export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: 5432,
});
