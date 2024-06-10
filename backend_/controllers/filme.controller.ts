import { Request, Response } from 'express';
import Filme, { FilmeDocument } from '../models/filme.model';

export const createFilme = async (req: Request, res: Response): Promise<void> => {
    try {
        const novoFilme: FilmeDocument = new Filme(req.body);
        const filmeSalvo: FilmeDocument = await novoFilme.save();
        res.status(201).json(filmeSalvo);
    } catch (error) {
        res.status(400).json({ message: (error as Error).message || 'Erro desconhecido' });
    }
};

export const getFilmes = async (req: Request, res: Response): Promise<void> => {
    try {
        const filmes: FilmeDocument[] = await Filme.find();
        res.status(200).json(filmes);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message || 'Erro desconhecido' });
    }
};

export const getFilmeById = async (req: Request, res: Response): Promise<void> => {
    try {
        const filme: FilmeDocument | null = await Filme.findById(req.params.id);
        if (!filme) {
            res.status(404).json({ message: 'Filme não encontrado' });
            return;
        }
        res.status(200).json(filme);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message || 'Erro desconhecido' });
    }
};

export const updateFilme = async (req: Request, res: Response): Promise<void> => {
    try {
        const filme: FilmeDocument | null = await Filme.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!filme) {
            res.status(404).json({ message: 'Filme não encontrado' });
            return;
        }
        res.status(200).json(filme);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message || 'Erro desconhecido' });
    }
};

export const deleteFilme = async (req: Request, res: Response): Promise<void> => {
    try {
        const filme: FilmeDocument | null = await Filme.findByIdAndDelete(req.params.id);
        if (!filme) {
            res.status(404).json({ message: 'Filme não encontrado' });
            return;
        }
        res.status(200).json({ message: 'Filme excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ message: (error as Error).message || 'Erro desconhecido' });
    }
};
