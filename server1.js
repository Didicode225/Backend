const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "API conférence active" });
});

app.post("/inscription", (req, res) => {
    const data = req.body;

    if (!data) {
        return res.status(400).json({ message: "Aucune donnée reçue" });
    }

    console.log("Nouvelle inscription :", data);

    res.status(200).json({
        success: true,
        message: "Inscription enregistrée"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});