import { Router } from 'express';
import { SearchEngine, Document } from '../search/SearchEngine';
import homeHandler from '../controllers/homeController';

import fs from 'fs';

const rawData = fs.readFileSync('./data/docs.json', 'utf8');
const docs: Document[] = JSON.parse(rawData);


const searchEngine = new SearchEngine(docs);

const router = Router();

router.get('/', homeHandler);
router.get('/home', homeHandler);
router.get('/default', homeHandler);
router.get('/hello', homeHandler);
router.get('/welcome', homeHandler);




// Define a type for the query parameters
interface QueryParams {
    q?: string;
}

// Home route
router.get('/', homeHandler);

// Search route
router.get('/search', (req, res) => {
    const query = (req.query as QueryParams).q || '';
    const results = searchEngine.search(query, docs);
    res.json(results);
});


export default router;
