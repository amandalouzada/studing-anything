
const client ='pg';
// Update with your config settings.
module.exports = {
  development: {
    client: client,
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: 'postgres',
      database: 'studing-anything',
      port: 5432
    },
    migrations: {
      tableName: `migrations`
    },
    useNullAsDefault: true
  },

  test: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: 'postgres',
      database: 'studing-anything-test',
      port: 5432
    },
    migrations: {
      tableName: `migrations`
    },
    useNullAsDefault: true
  },

};