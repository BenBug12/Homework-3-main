import express from "express"
import path from "node:path"

const app = express();
const PORT = 3000;

app.use(express.static(path.join(import.meta.dirname, "public")));

// Server-side routing to serve index.html when root or /test is accessed
app.get("/web", (req, res) => {
    res.send(path.join(import.meta.dirname, "index.html"));
});

app.listen(port, ()=> {
    console.log(`Server started listening on port ${port}`);
});