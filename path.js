import path from "path";
import { fileURLToPath } from "url";
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
if(!fs.existsSync('upload')){
    fs.mkdirSync('upload')
}

const __dirname = path.dirname(__filename)
const location = path.join(__dirname, 'upload', 'enjoy.pdf')

export const content = (content) => {
    
}

export const pathname = () =>{
    console.log(path.basename('/asdf/adswie/djadu/eet.pdf'))
    console.log(path.basename ('/adsf/adswie/djadu/eet.pdf','.pdf'))
    console.log(path.extname('/user/documents/office/studentqr.pdf'))
    console.log(path.parse('c:/user/desktop/study/2nd Sem/statistics/statics.pdf'))

    const paths = {
        root: 'c:/',
        dir:'root/user/academic',
        base:'user.html'
    }

    console.log(path.format(paths))
    console.log(path.join('/user', 'uploads', 'file.pdf'))
    console.log(path.normalize('/user/../bsdf/about/./here.txt'))
    console.log(path.isAbsolute('/user/about/service'))
}
