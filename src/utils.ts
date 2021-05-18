import { pool } from '../database/mockdb';
import { v4 as uuidv4 } from 'uuid';
//pool.connect();

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

interface Project {
  id: number;
  title: string;
  status: string;
}

export const readQuery = async (query: string) => {
  try {
    const res = await pool.query(query);
    return res.rows;
  } catch (err) {
    console.error(err);
  }
};

export const createUserTable = async () => {
  const query = `
  CREATE TABLE users (
      id varchar primary key,
      name varchar,
      email varchar,
      password varchar
  )
  `;

  return readQuery(query);
};

export const createProjectTable = async () => {
  const query = `
  CREATE TABLE projects (
      id serial primary key,
      title varchar,
      status varchar
  )
  `;

  return readQuery(query) ? 'Table created.' : 'Unable to create table.';
};

/*
export const createUserTable = async () => {
  const query = `
    CREATE TABLE users (
        id int primary key,
        name varchar,
        email varchar,
        password varchar
    );
    `;

  try {
    const res = await pool.query(query);
    console.log('Table has been created successfully');
  } catch (err) {
    console.error(err);
  } //finally {
   //pool.end();
  //}
};*/

export const listTables = async () => {
  const query = `
    SELECT table_name
    FROM information_schema.tables
    WHERE table_schema = 'public'
    ORDER BY table_name;
    `;
  try {
    const res = await pool.query(query);
    console.log(res.rows);
  } catch (err) {
    console.error(err);
  }
};

export const findUserByEmail = async (email: string): Promise<User[]> => {
  const query = {
    text: 'SELECT * FROM users WHERE email = $1',
    values: [email],
  };

  try {
    const res = await pool.query(query);
    return res.rows;
  } catch (err) {
    console.error(err);
  }
  return [
    {
      id: '0',
      name: 'J Doe',
      email: 'jdoe@zcorp.com',
      password: 'passwordz',
    },
  ];
};

export const addUser = async (
  name: string,
  email: string,
  password: string
) => {
  const query = {
    text: 'INSERT INTO users(id, name, email, password) VALUES($1, $2, $3, $4)',
    values: [uuidv4(), name, email, password],
  };

  const userQuery = await findUserByEmail(email);
  if (userQuery?.length === 0) {
    try {
      const res = await pool.query(query);
      console.log('User added.');
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log('Unable to add user. Check your email address');
  }
};
/*
export const addUser = async (
  id: number,
  name: string,
  email: string,
  password: string
) => {
  const query = {
    text: 'INSERT INTO users(id, name, email, password) VALUES($1, $2, $3, $4)',
    values: [id, name, email, password],
  };
  try {
    const res = await pool.query(query);
    console.log(res.rows);
  } catch (err) {
    console.error(err);
  } //finally {
    //pool.end();
  //}
};*/

export const getUser = async () => {
  const query = `
    SELECT * FROM users
    `;
  try {
    const res = await pool.query(query);
    return res.rows;
  } catch (err) {
    console.error(err);
  }
};

export const addProject = async (title: string, status: string) => {
  const query = {
    text: 'INSERT INTO projects(title, status) VALUES($1, $2)',
    values: [title, status],
  };

  try {
    const res = await pool.query(query);
    console.log('Project added.');
  } catch (err) {
    console.error(err);
  }
};
