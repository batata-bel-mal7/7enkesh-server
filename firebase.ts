import admin from "firebase-admin";
import fconfig from "./fconfig";

admin.initializeApp({
  credential: admin.credential.cert(fconfig),
});

export default admin;
