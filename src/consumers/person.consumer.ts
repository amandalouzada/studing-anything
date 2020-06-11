import kafka from '@configs/kafka';
import personModel from '@models/person.model';
import { EachMessagePayload } from 'kafkajs'

export default class PersonConsumer {
    constructor() {
        this.addPerson();
    }

    async addPerson(): Promise<void> {
        const consumer = kafka.consumer({
            groupId: 'studing-anything',
        });

        await consumer.connect();
        await consumer.subscribe({
            topic: 'studing-anything.add-person',
            fromBeginning: true,
        });

        const eachMessage = async (payload: EachMessagePayload) => {
            const data = JSON.parse(payload.message.value.toString());
            await personModel.create(data);
        }

        await consumer.run({ eachMessage });

    }
}