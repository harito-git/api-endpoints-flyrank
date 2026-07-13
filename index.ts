import express from 'express'
import type {Request, Response} from 'express'


const app= express();
const PORT = 3000;
console.log('It works');

app.get('/get', (req:Request, res:Response) => {
    res.json('Hi, my name is Harit!');
    //console.log('Success, it works!');

})
app.get('/hello', (req:Response, res:Response) => {
    res.json('Hello Wolrd!');
})

app.listen(PORT, () =>{
    console.log('You are listening on', PORT);
});
