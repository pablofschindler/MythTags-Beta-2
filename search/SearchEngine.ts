import lunr from 'lunr';

export interface Document {
    id: string;
    title: string;
    content: string;
    category: string;
}

export class SearchEngine {
    private index: lunr.Index;

    constructor(docs: Document[]) {
        this.index = lunr(function () {
            this.ref('id');
            this.field('title', { boost: 10 });
            this.field('content');
            this.field('category');

            docs.forEach(doc => {
                this.add(doc);
            });
        });
    }

    search(query: string, docs: Document[]): Document[] {
        return this.index.search(query).map(({ ref }) => {
            return docs.find(doc => doc.id === ref);
        }).filter(Boolean) as Document[];
    }
}
