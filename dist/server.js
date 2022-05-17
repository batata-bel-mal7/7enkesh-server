"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const firebase_1 = __importDefault(require("./firebase"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
app.use((req, res, next) => {
    firebase_1.default.firestore().collection("products").get().then(snapshot => {
        snapshot.forEach(doc => {
            console.log(doc.id, "=>", doc.data());
        });
        next();
    }).catch(err => {
        console.log("Error getting documents", err);
        next();
    });
});
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
