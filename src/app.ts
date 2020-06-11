import './bootstrap';
import '@consumers/index';
import client from '@configs/kafka';


const initApp = async () => {
    console.log(`🚀App running ${process.env.NODE_ENV} `);

    // example to sender message
    // client.producer().send({
    //     topic:'studing-anything.add-person',
    //     messages: [{ value: JSON.stringify({
    //         name: 'AMANDA NUNES LOUZADA',
    //         document: '00000000011',
    //         type: 'pf'
    //     }) }],
    // })
}

setInterval(initApp, 1200);
initApp();