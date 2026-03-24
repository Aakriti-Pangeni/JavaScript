// import { appendFile } from 'fs'
// import { createFile, readFile, updateFile, appendFile } from './fileSystem.js'

// createFile()
// readFile()
// updateFile()
// appendFile()



// import { homeDir, platform } from "./os.js";
// import { pathname } from "./path.js";

// platform()
// homeDir()
// pathname()



// import { encrypted } from "./cryptoEnc.js";
// encrypted;


// import http from 'http';

// const server = http.createServer(( req, res) => {
//     if (req.url == "/"){
//         res.write("<h1>Welcome to Backend");
//     }
//     else if ( req.url == '/service'){
//          res.write("<h1>Service is running </h1>");
//     }
//      else if ( req.url == '/contact'){
//          res.write("<h1>Contact is running </h1>");
//     }
//     else{
//          res.write("<h1>Page not found </h1>");

//     }
//     res.end();
// })

// const PORT =3000;


// server.listen(PORT, () =>{
//     console.log(`Server is running on http://localhost:${PORT}`)
// })


// import express from 'express';

// const app = express();
// const PORT = 3000;

// //middleware
// app.use(express.json());


// app.get('/', (req, res) => {
//     // res.status(201)
//     // res.status(202)
// res.header("Content-Type", "Multi-part/formdata")

//     res.status(200).json({
//         message:"Data retrieved Successfully",
//         data:{
//             name:"Oh hi",
//             age:12,
//             email:"ohhi123@gmail.com"
//         }
//     })

//     // res.send("<h1>Welcome To Backend </h1>")
//     // res.json({
//     //     name:"Hii",
//     //     age:26,
//     //     email:"hello234@gmail.com"
//     // })
// })


// app.post('/post', (req,res) => {
//     const reqs = req.body;
//     // console.log(reqs)
//     res.status(201).json({
//         message:"Data Created Successfully",
//         data: reqs,
//     })
// })

// app.delete('/delete/:id', (req, res) => {
//     const id = req.params.id
//     res.status(200).json({
//         message: "User Deleted Sucessfully",
//         sucess:true
//     })
// })

// app.put('/update/:id', (req, res) => {
//     const id = req.params.id
//     const data = req.body
//     res.status(201).json({
//         message:"Data Created Successfully",
//         sucess:true,
//         data: data
//     })
// })

// app.listen (PORT, () => {
//  console.log(`Server is running on http://localhost:${PORT}`)
// })




import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors({
    //origin:'http://localhost:5173" || 'http://localhost:5174' || 'http://localhost:3000'
    origin:"*"
}))


//name+bijay+chaudhary+age+24+nationality+nepal
//{name:"bijay", age:'24', nationality:"nepal"}

//first middleware
//zod validation
//cors
app.use((req, res, next )=>{
    res.send('this is first middleware...')
    next()
})

app.use((req, res, next )=>{
    res.send('this is second middleware...')
})

app.use((req, res, next )=>{
    res.send('this is third middleware...')
})


app.get('/', (req, res) =>{
    res.send("Hello, World !")

});

app.post('/about', (req,res) =>{
    const data = req.body;
    if(!data.movie){
        throw new Error ("Movie Name is required....")
    }
    console.log(data)
    res.send('This is about page. ')
})

app.use((req,res,next) => {
    res.send("404 Route not Found...")
    next()
})

app.use((err,req,res,next) =>{
    res.send(err.message || "500 Internal Server Error....")
})


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})