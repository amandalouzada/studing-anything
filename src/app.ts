import './bootstrap';

const initApp = () => {
    console.log(`🚀App running ${process.env.NODE_ENV} deploy teste`);
}

setInterval(initApp, 1200);
initApp();