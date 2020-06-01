import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    response.json(['Misael', 'Augusto', 'Silva', 'da', 'Costa']);
})

app.listen(3333);