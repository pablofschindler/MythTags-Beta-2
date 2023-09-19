"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchEngine = void 0;
const lunr_1 = __importDefault(require("lunr"));
class SearchEngine {
    constructor(docs) {
        this.index = (0, lunr_1.default)(function () {
            this.ref('id');
            this.field('title', { boost: 10 });
            this.field('content');
            this.field('category');
            docs.forEach(doc => {
                this.add(doc);
            });
        });
    }
    search(query, docs) {
        return this.index.search(query).map(({ ref }) => {
            return docs.find(doc => doc.id === ref);
        }).filter(Boolean);
    }
}
exports.SearchEngine = SearchEngine;
