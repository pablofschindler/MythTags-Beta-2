import express from "express";
import router from "./routes/index";
import path from "path";


const server = express();

server.use('/public', express.static(path.join(__dirname, 'public')));

server.use(express.static("public"));
server.use(express.urlencoded({ extended: false }));
server.use(router);

server.listen(3000, () => {
    console.log("Server is running at 3000!");
})
