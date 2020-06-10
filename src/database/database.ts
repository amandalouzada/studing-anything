import Knex from 'knex';

// Config environments

class Database {

    public connection: Knex;

    constructor(){
      this.init();
    }

    init() {

    }
    
}

export default new Database().connection;

