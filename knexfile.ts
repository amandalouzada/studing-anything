// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: 'postgres',
      database: 'postgres',
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
      database: 'postgres',
      port: 5432
    },
    migrations: {
      tableName: `migrations`
    },
    useNullAsDefault: true
  },

};