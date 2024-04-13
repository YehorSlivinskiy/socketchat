import http from "http";
import path from "path";
import fs from "fs"
import { CLIENT_RENEG_LIMIT } from "tls";

const __dirname = path.resolve();

let pathToIndex = path.join(__dirname, "static", "index.html")
let IndexHtmlFile = fs.readFileSync(pathToIndex)
let pathToStyle = path.join(__dirname, "static", "style.css")
let styleFile = fs.readFileSync(pathToStyle)
let pathToScript = path.join(__dirname, "static", "script.js")
let scriptFile = fs.readFileSync(pathToScript)

let server = http.createServer((req, res)=>{
 try{
if(req.url == "/" && req.method == "GET"){
    return res.end(IndexHtmlFile)
}
if(req.url == "/script.js" && req.method == "GET"){
    return res.end(scriptFile)
}
if(req.url == "/style.css" && req.method == "GET"){
    return res.end(styleFile)
}
res.writeHead(404, "Not found")
res.end()
 }catch(error){
    console.error(error.message)
    res.writeHead(500, "Server error")
    res.end()
 }
})

server.listen(3000, function(){
    console.log("Server started on 3000 port")
})