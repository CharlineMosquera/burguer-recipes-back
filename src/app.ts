import express from "express";
import cors from 'cors';
import recipesRoutes from "./routes/recipeRoutes";
import userRoutes from "./routes/userRoutes";

/* Objeto principal que se utilizará para configurar el servidor,
manejar rutas y middlewares. */
const app = express(); // crea una instancia de una aplicación Express

/* Middlewares */
app.use(cors({
    origin: "http://localhost:3000", // Solo permitir este dominio
    methods: ["GET", "POST"] // Solo permitir ciertos métodos HTTP
}));

// Leer cuerpos de solicitudes en formato JSON
app.use(express.json());

/* Routes */
app.use('/api/recipes', recipesRoutes);
app.use('/api/users', userRoutes);
app.get("/", (req, res) => {
    res.send("Hola, Char! Esta es tu API funcionando 🚀 en tiempo real de cambios");
});


export default app;