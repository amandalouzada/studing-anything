import './bootstrap';
import PersonModel from '@models/person';

const initApp = () => {

    console.log(`🚀App running ${process.env.NODE_ENV}`);
}

setInterval(initApp, 1200);
initApp();