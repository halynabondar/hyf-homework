import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Support parsing JSON requests
app.use(express.json());

const getDocuments = () => {
    try {
        const filePath = path.join(__dirname, 'documents.json');
        const data = fs.readFileSync(filePath);
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading documents file:', error);
        return [];
    }
};

app.get("/", (req, res) => {
    res.send("This is a search engine");
});

// GET /search endpoint
app.get("/search", (req, res) => {
    const { q: query } = req.query;
    const documents = getDocuments();

    if (!query) {
        return res.json([]);
    }

    const lowerCaseQuery = query.toLowerCase();

    const filteredDocuments = documents.filter(({ value }) =>
        value && value.toLowerCase().includes(lowerCaseQuery)
    );

    const response = filteredDocuments.map(({ id, type, value }) => ({
        id,
        type,
        value
    }));

    return res.json(response);
});

// GET /documents/:id endpoint
app.get('/documents/:id', (req, res) => {
    const documentId = req.params.id;
    const documents = getDocuments();

    // Find the document by ID
    const document = documents.find(doc => doc.id === documentId);

    if (document) {
        // Respond with the document if found
        res.status(200).json(document);
    } else {
        // Respond with a 404 if the document is not found
        res.status(404).send('Document not found');
    }
});

// POST /search endpoint
app.post('/search', (req, res) => {
    const query = req.query.q;
    const { fields } = req.body;
    const documents = getDocuments();

    // If both query (q) and fields are provided, return 400
    if (query && fields) {
        return res.status(400).json({
            error: "Cannot provide both 'q' (query parameter) and 'fields' (in request body) at the same time"
        });
    }

    let results = [];

    // If query parameter q is provided, search items by value
    if (query) {
        results = documents.filter(doc =>
            doc.value && doc.value.toLowerCase().includes(query.toLowerCase())
        );
        return res.status(200).json(results);
    }

    // If fields are provided, filter by those fields
    if (fields) {
        results = documents.filter(doc => {
            // Check each field in the fields object
            return Object.keys(fields).every(key => doc[key] && doc[key] === fields[key]);
        });
        return res.status(200).json(results);
    }

    // If neither query nor fields are provided, return all documents
    res.status(200).json(documents);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});