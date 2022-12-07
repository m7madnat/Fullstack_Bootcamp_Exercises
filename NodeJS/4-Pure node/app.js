import http from "http";
import fs from 'fs';
import * as url from 'url'
const __dirname = url.fileURLToPath(new URL('.' , import.meta.url))


const PORT = "5000";
/* two ways to get json */
//               first one
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const users = require('./users.json')

//                second one
// import users from './users.json' assert { type: "json" };


const server = http.createServer((req, res) => {
    if(req.method !== 'GET'){
        res.end(`error: ${http.STATUS_CODES[405]}`)
    }else{
        if(req.url === '/raw-html'){
            res.writeHead(200, 
                {'Content-Type': 'text/html'})
            res.write('<h1>Welcome</h1>')
            res.write('<p>Welcome</p>')
            res.end() // we use end because we don't have any more data to send
         }
        if(req.url === '/users'){
            res.writeHead(200, 
                {'Content-Type': 'application/json'})
            res.end(JSON.stringify(users))           
        }

        const parsedUrl = new URL(req.url, `http://127.0.0.1:${PORT}`)
        let path = parsedUrl.pathname.replace(/^\/+|\/+$/g, '')

        if(path == ''){
            path = 'index.html'
        }
        let file = __dirname + 'public\\' + path;
        fs.readFileSync(file, (err , content) =>{
            if(err){
                res.writeHead(404)
                res.end()
            }else{
                switch(path){
                    case 'index.html':
                        res.writeHead(200,
                            {'Content-Type': 'text/html'})
                        break;                   
                    }       
                res.end(content)
            }            

        })

    }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
