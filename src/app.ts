import './bootstrap';

const initApp = () => {
    console.log(`🚀App running in ${process.env.NODE_ENV}`);
}

setInterval(initApp, 1200);
initApp();