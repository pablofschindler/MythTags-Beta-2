import { Request, Response } from "express";
import path from "path";

const homeHandler = (request: Request, response: Response) => {
    response.sendFile(path.join(__dirname, '../views/home.html'));
    /*response.render("home", {
        layout: false,
        pageName: "Homepage"
    });*/
};

export default homeHandler