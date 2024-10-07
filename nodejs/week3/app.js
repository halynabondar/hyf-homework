import knex from 'knex';

const knexInstance = knex({
    client: "mysql2",
    connection: {
        host: process.env.DB_HOST || "127.0.0.1",
        port: process.env.DB_PORT || 3306,
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "my-secret-pw",
        database: process.env.DB_NAME || "hyf_node_week3_warmup",
        multipleStatements: true,
    },
});

import express from 'express'
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const apiRouter = express.Router();
app.use("/api", apiRouter);

const contactsAPIRouter = express.Router();
apiRouter.use("/contacts", contactsAPIRouter);

contactsAPIRouter.get("/", async (req, res) => {
    let query = knexInstance.select("*").from("contacts");

    if ("sort" in req.query) {
        const orderBy = req.query.sort.toString();
        // const parsedOrderBy = orderBy;

        // -- Volubility fix
        const validFields = ['id', 'first_name', 'last_name', 'email', 'phone'];
        // Convert the valid fields array into a regular expression group
        const fieldPattern = validFields.join('|');

        // Define the regular expression pattern to match <fieldname> followed by " ASC" or " DESC"
        const regex = new RegExp(`^(${fieldPattern})\\s(ASC|DESC)$`, 'i');

        // Return the input string if it matches the pattern, otherwise return an empty string
        const parsedOrderBy =  regex.test(orderBy) ? orderBy : '';
        // -- End of Volubility fix

        if (parsedOrderBy.length > 0) {

            query = query.orderByRaw(orderBy);
        }
    }

    console.log("SQL", query.toSQL().sql);

    try {
        const data = await query;
        res.json({ data });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});