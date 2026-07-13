import express from 'express';
const app = express();
const PORT = 3000;
console.log('It works');
app.get('/get', (req, res) => {
    res.json('Hi, my name is Harit!');
    //console.log('Success, it works!');
});
app.listen(PORT, () => {
    console.log('You are listening on', PORT);
});
//# sourceMappingURL=index.js.map