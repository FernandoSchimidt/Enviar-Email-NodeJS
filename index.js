const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false,

    auth:{
        user: 'fernandoschimidt@outlook.com',
        pass:'F3rn4nd0'
    }
});


 transporter.sendMail({
    from:'Fernando <fernandoschimidt@outlook.com>',
    to:'fernandoschimidt93@hotmail.com',
    subject:'Ola eu sou o fernando e estou trabalhando com nodemailer',
    text:'Ola eu sou goku',
    html:'Ola meu nome é goku e eu acho nodemailer<a href=""></a> muito legal'

}).then(message =>{
    console.log(message);
}).catch(err =>{
    console.log(err);
});