import { BaseModel } from "./base.model";

interface IPerson {
    id?: string;
    name?: string;
    document?: string;
    type?: string;
    created_at?: string;
    updated_at?: string;
}


class PersonModel extends BaseModel<IPerson>{
   protected tableName = 'person';
}

const personModel = new PersonModel();
export default personModel;