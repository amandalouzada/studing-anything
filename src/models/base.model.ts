import db from "../database/database";
import { QueryBuilder } from "knex";
import { v4 as uuidv4 } from 'uuid';

export abstract class BaseModel<T> {
    protected _queryBuilder: QueryBuilder;
    protected tableName: string;

    constructor() {
    }

    get queryBuilder() {
        const queryBuilder = () => db(this.tableName);
        return queryBuilder();
    }

    async getById(id: string): Promise<T> {
        return this.queryBuilder.where('id', id).first();
    };

    async create(data: T): Promise<T> {
        Object.assign(data, { id: uuidv4() });
        const [result] = await this.queryBuilder.insert(data).returning('*');
        return result;
    }

    async update(data: T, id: string): Promise<T> {
        await this.queryBuilder.where('id', id).update(data);
        return this.getById(id)
    }

    async findAll(data: T) {
        return this.queryBuilder.where(data);
    }

    async deletById(id: string) {
        await this.queryBuilder.where('id', id).delete();
    }


}