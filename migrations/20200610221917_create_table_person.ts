import * as Knex from "knex";

export const up = async (knex: Knex): Promise<any> =>
    knex.schema.createTable('person', (table: Knex.CreateTableBuilder) => {
        table.uuid('id').primary();
        table.text('name').notNullable();
        table.text('document').notNullable().unique();
        table.text('type').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });


export const down= async (knex: Knex): Promise<any> =>knex.schema.dropTable('person');


