const qrcode = require('qrcode-terminal');
const { EditPhotoHandler } = require('./feature/edit_foto');
const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});


client.on('message', async msg => {

    const text = msg.body.toLowerCase() || '';


    // #edit_bg/bg_color
    if (text.includes("#edit_bg/")) {
        await EditPhotoHandler(text, msg);
    }

});
client.initialize();



