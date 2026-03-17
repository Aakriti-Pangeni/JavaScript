import fs from 'fs';


export function createFolder(){
    if (!fs.existsSync("Files")){
        fs.mkdirSync("Files")
    }
}

// Synchronous
export function createFile(){
    if (fs.existsSync("File1.pdf")){
        console.log("File already exists..");
    }
    else{
        fs.writeFile("File1.pdf", "Lets Get Started", (err) => {
            if (err){
                console.log("Error Occured", err);
            }
            else{
                console.log("File Created SucessFully")
            }
        })
        
//Asynchronous 
fs.writeFileSync("File2.xls","I hope everything goes right"
)

    }
}

export function readFile()
{
 fs.readFile("File1.pdf", "utf-8", (err, data) => {
    if (err) console.log(err);
    else console.log(data);
 })
 const data = fs.readFileSync("File1.pdf", "utf-8");
 console.log(data);
}

export function updateFile(){
    fs.writeFile("File1.pdf", "You have to be fine", (err, data) =>{
        if(err)
            console.log(err)
        else
            console.log(data)
    })

   
}  


   export function appendFile() {
    fs.appendFileSync("File1.pdf", "Lets goo");
    console.log("Data Appended Successfully");
}
// export function deleteFile(
// fs.unlinkSync(File2.xls)
// )


fs.renameSync('File1.pdf', 'NewFile.pdf')
