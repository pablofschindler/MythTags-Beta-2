"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const homeHandler = (request, response) => {
    response.sendFile(path_1.default.join(__dirname, '../views/home.html'));
    /*response.render("home", {
        layout: false,
        pageName: "Homepage"
    });*/
};
exports.default = homeHandler;
