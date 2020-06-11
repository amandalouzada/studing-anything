import './bootstrap';
import personModel from '@models/person.model';

const initApp = async () => {
    const persons = await personModel.findAll({});
    console.log(`🚀App running ${process.env.NODE_ENV} `, persons);
}

setInterval(initApp, 1200);
initApp();