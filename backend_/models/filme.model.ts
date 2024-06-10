import mongoose, { Document, Schema, Model } from 'mongoose';

export interface Ator {
    nome: string;
    imagem: string;
}

export interface FilmeDocument extends Document {
    titulo: string;
    genero: string;
    data: Date;
    diretor: string;
    bilheteria?: number;
    imagem?: string;
    capa?: string;
    sinopse?: string;
    atores?: Ator[];
    trailer?: string;
}

export interface FilmeModel extends Model<FilmeDocument> {}

const FilmeSchema: Schema<FilmeDocument> = new mongoose.Schema({
    titulo: { type: String, required: true },
    genero: { type: String, required: true },
    data: { type: Date, required: true },
    diretor: { type: String, required: true },
    bilheteria: { type: Number, default: 0 },
    imagem: { type: String },
    capa: { type: String },
    sinopse: { type: String },
    atores: [{
        nome: { type: String },
        imagem: { type: String }
    }],
    trailer: { type: String }
});

export default mongoose.model<FilmeDocument, FilmeModel>('Filme', FilmeSchema);
