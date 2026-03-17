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


import http from 'http';

const server = http.createServer(( req, res) => {
    if (req.url == "/"){
        res.write("<h1>Welcome to Backend");
    }
    else if ( req.url == '/service'){
         res.write("<h1>Service is running </h1>");
    }
     else if ( req.url == '/contact'){
         res.write("<h1>Contact is running </h1>");
    }
    else{
         res.write("<h1>Page not found </h1>");

    }
    res.end();
})

const PORT =3000;


server.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`)
})
