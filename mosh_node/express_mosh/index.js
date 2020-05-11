const express = require('./node_modules/express');
const app = express();

// common express methods
// app.get()
// app.post()
// app.put()
// app.delete();

app.get('/', (req, res) => {
    res.send('Hello World!!!!!!!!!!!!!!!');
})

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
})

process.ENV
app.listen(3000, () => console.log("Listening on port 3000"));