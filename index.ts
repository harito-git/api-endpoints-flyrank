<<<<<<< HEAD
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
=======
//declare express and install dependencies
import express, {Request, Response} from 'express';


const app = express();

//MiddleWare
app.use(express.json({limit:'19mb'}));
const PORT = 3000;

//First api endpoint, a 'GET' request
app.get('/get', (req:Request, res:Response) => {
    const user:any={name:'Harit',interests:'Soccer, Basketball, biking'}
    console.log(`User's name is ` , user.name , 'Interests are ', user.interests);
    return res.json('Hi, my name is Harit.');
});


app.get('/hello', (req:Request, res:Response) => {
    return res.json('Hello World');
})
app.listen(PORT, '0.0.0.0', () => {
    console.log('Listening on port, the url is http://localhost:3000');


}


);


>>>>>>> 5d668300596cd2c0619cd4f949a4bcc734d12396
