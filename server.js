"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const path_1 = __importDefault(require("path"));
const server = (0, express_1.default)();
server.use('/public', express_1.default.static(path_1.default.join(__dirname, 'public')));
server.use(express_1.default.static("public"));
server.use(express_1.default.urlencoded({ extended: false }));
server.use(index_1.default);
server.listen(3000, () => {
    console.log("Server is running at 3000!");
});
