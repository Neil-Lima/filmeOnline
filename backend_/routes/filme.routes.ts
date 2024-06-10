import { Router } from 'express';
import * as filmeController from '../controllers/filme.controller';

export function filmeRoutes(): Router {
    const router: Router = Router();

    router.post('/filmes', filmeController.createFilme);
    router.get('/filmes', filmeController.getFilmes);
    router.get('/filmes/:id', filmeController.getFilmeById);
    router.put('/filmes/:id', filmeController.updateFilme);
    router.delete('/filmes/:id', filmeController.deleteFilme);

    return router;
}
