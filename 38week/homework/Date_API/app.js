const { response } = require('express');
const express = require('express');

const app = express();

// A route to get the time.
app.get('/time', (request, response) => {
    const date = new Date();
    response.send({
        time: date.getHours() + ':' + date.getMinutes()
        // ELLER
        //time: date.toLocaleTimeString()
    });
});

// An endpoint that tells the client what day of the week it is.

// const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

app.get('/weekday', (request, response) => {
    const date = new Date();
    response.send({
        //weekday: weekdays[date.getDay()]
        // ELLER
        weekday: date.toLocaleDateString('da-DE', {weekday: 'long'})
    });
});

// Implement the path “/month”.
app.get('/month', (request, response) => {
    const date = new Date();
    response.send({
        month: date.toLocaleDateString('da-DE', {month: 'long'})
    });
}

);















app.listen(1111);
