import express, { Request, Response } from 'express'; 
import { filmeRoutes } from './routes/filme.routes'; 
import connectDB from './config/filme.config';

const app = express();

app.use(express.json());

app.use(filmeRoutes());

connectDB().catch((error) => {
    console.error('Erro ao conectar ao banco de dados MongoDB:', error);
    process.exit(1); 
});

app.get('/', (req: Request, res: Response) => {
    res.send('API do Filme');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
