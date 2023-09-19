"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SearchEngine_1 = require("../search/SearchEngine");
const homeController_1 = __importDefault(require("../controllers/homeController"));
const fs_1 = __importDefault(require("fs"));
const rawData = fs_1.default.readFileSync('./data/docs.json', 'utf8');
const docs = JSON.parse(rawData);
const searchEngine = new SearchEngine_1.SearchEngine(docs);
const router = (0, express_1.Router)();
router.get('/', homeController_1.default);
router.get('/home', homeController_1.default);
router.get('/default', homeController_1.default);
router.get('/hello', homeController_1.default);
router.get('/welcome', homeController_1.default);
// Home route
router.get('/', homeController_1.default);
// Search route
router.get('/search', (req, res) => {
    const query = req.query.q || '';
    const results = searchEngine.search(query, docs);
    res.json(results);
});
exports.default = router;
