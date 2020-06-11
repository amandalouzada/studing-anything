import Knex from 'knex';
// Config environments
import './../bootstrap';
class Database {

    public connection: Knex;

    constructor(){
      this.init();
    }

    init() {
      this.connection = Knex({
        client: process.env.DB_CLIENT,
        connection: {
          host: process.env.DB_HOST,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_DATABASE,
          port: parseInt(process.env.PORT)
        },
      })

    }
    
}

export default new Database().connection;

