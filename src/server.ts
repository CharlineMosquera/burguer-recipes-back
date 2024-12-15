import app from "./app"; // La instancia de Express
import connectDB from "./utils/dataBase";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

connectDB();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
