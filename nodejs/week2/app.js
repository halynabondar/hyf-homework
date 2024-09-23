import express from 'express'
import documents from './documents.json'
const app = express();
const port = process.env.PORT || 3000;

// Support parsing JSON requests
app.use(express.json());

app.get("/", (req, res) => {
    res.send("This is a search engine");
});

// Search endpoint
app.get('/search', (req, res) => {
    const query = req.query.q;

    // If q is provided, filter the documents
    if (query) {
        const results = documents.filter(doc =>
            doc.value.toLowerCase().includes(query.toLowerCase())
        );
        res.json(results);
    } else {
        // If q is not provided, return all documents
        res.json(documents);
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});