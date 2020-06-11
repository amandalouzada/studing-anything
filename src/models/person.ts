import Knex from "knex";

interface IPerson {
    id: string;
    name: string;
    document: string;
    type: string;
    created_at: string;
    updated_at: string;
}

const PersonModel = () => Knex('Person');

export default PersonModel();