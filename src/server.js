const express = require('express');

const app = express();

app.set('view engine', 'ejs');


app.get('/', function (req, res) {
    const items = [
        {
            title:'D',
            message: 'esenvolver aplicações/serviços de forma fácil' 
        },
        {
            title:'E',
            message: 'JS usa JavaScript para renderizar HTML' 
        },
        {
            title:'M',
            message: 'uito fácil de usar' 
        },
        {
            title:'A',
            message: 'juda muito durante o desenvolvimento' 
        },
        {
            title:'I',
            message: 'mplementado e usado bastante' 
        },
        {
            title:'S',
            message: 'empre tenha ele em mente' 
        },
    ]

    const subtitle = 'Uma linguagem de modelagem para criação de páginas HTML utilizando JS'
    res.render('pages/index', {
        qualitys:items,
        subtitle:subtitle,
    });
})

app.get('/sobre', function (req, res) {
    res.render('pages/about');
})


app.listen(8080);
console.log('Rodando')