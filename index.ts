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


