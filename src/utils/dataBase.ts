import mongoose from "mongoose";

/* Función asincronica que no devuelve un valor (Promise<void>) */
const connectDB = async (): Promise<void> => { 
    try {
        await mongoose.connect(process.env.MONGO_URI || "");  // Intenta conectar a la base de datos
        console.log("MongoDB Atlas connected!");
    } catch (error) {
        console.error(`Error: ${error}`);
        process.exit(1);
    }
};

export default connectDB;