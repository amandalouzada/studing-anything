import personModel from './../../src/models/person.model';
import db from './../../src/database/database';

describe('Person Model', () => {

    afterAll(async () => {
        await db.destroy();
    })

    it('insert person', async () => {
        const person = await personModel.create({
            name: 'AMANDA NUNES LOUZADA',
            document: '00000000011',
            type: 'pf'
        })

        expect(person).toHaveProperty('id');
        expect(person).toHaveProperty('name', 'AMANDA NUNES LOUZADA');
        expect(person).toHaveProperty('document', '00000000011');
        expect(person).toHaveProperty('type', 'pf');
        expect(person).toHaveProperty('created_at');
        expect(person).toHaveProperty('updated_at');
    })

    it('get person by id', async () => {
        const person = await personModel.create({
            name: 'AMANDA NUNES LOUZADA',
            document: '00000000022',
            type: 'pf'
        })
        const personFound = await personModel.getById(person.id);

        expect(personFound).toHaveProperty('id');
        expect(personFound).toHaveProperty('name', 'AMANDA NUNES LOUZADA');
        expect(personFound).toHaveProperty('document', '00000000022');
        expect(personFound).toHaveProperty('type', 'pf');
        expect(personFound).toHaveProperty('created_at');
        expect(personFound).toHaveProperty('updated_at');
    })

    it('delete person', async () => {

        const person = await personModel.create({
            name: 'AMANDA NUNES LOUZADA',
            document: '00000000044',
            type: 'pf'
        })

        await personModel.deletById(person.id);
        const personFound = await personModel.getById(person.id);
        expect(personFound).toBeUndefined();
    })

    it('update person', async () => {

        const person = await personModel.create({
            name: 'AMANDA NUNES LOUZADA',
            document: '00000000055',
            type: 'pf'
        })

        person.document = '00000000065'
        const personUpdated = await personModel.update(person, person.id);

        expect(personUpdated).toHaveProperty('id');
        expect(personUpdated).toHaveProperty('name', 'AMANDA NUNES LOUZADA');
        expect(personUpdated).toHaveProperty('document', '00000000065');
        expect(personUpdated).toHaveProperty('type', 'pf');
        expect(personUpdated).toHaveProperty('created_at');
        expect(personUpdated).toHaveProperty('updated_at');
        expect(personUpdated).not.toBe(person.updated_at);

    })

    it('find all person', async () => {
        const person = await personModel.create({
            name: 'AMANDA NUNES LOUZADA',
            document: '41251231000155',
            type: 'pj'
        })
        await personModel.create({
            name: 'AMANDA NUNES LOUZADA',
            document: '23026751000182',
            type: 'pj'
        })

        const persons = await personModel.findAll({
            type: 'pj'
        });

        expect(persons).toHaveLength(2);
        expect(persons[0]).toHaveProperty('id');
        expect(persons[0]).toHaveProperty('name');
        expect(persons[0]).toHaveProperty('document');
        expect(persons[0]).toHaveProperty('type', 'pj');
        expect(persons[0]).toHaveProperty('created_at');
        expect(persons[0]).toHaveProperty('updated_at');
        expect(persons[1]).toHaveProperty('type', 'pj');
    })

    
});