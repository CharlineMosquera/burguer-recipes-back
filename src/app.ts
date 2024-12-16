import express from "express";
import cors from 'cors';
import recipesRoutes from "./routes/recipeRoutes";
import userRoutes from "./routes/userRoutes";

/* Objeto principal que se utilizará para configurar el servidor,
manejar rutas y middlewares. */
const app = express(); // crea una instancia de una aplicación Express

/* Middlewares */
const corsOptions = {
    origin: [
        "*"
    ]
};

app.use(cors(corsOptions));

// Leer cuerpos de solicitudes en formato JSON
app.use(express.json());

/* Routes */
app.use('/api/recipes', recipesRoutes);
app.use('/api/users', userRoutes);

export default app;