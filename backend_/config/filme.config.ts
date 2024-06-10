import mongoose from 'mongoose';

const MONGODB_URL = 'mongodb+srv://victorneil08:madara@cluster0.jtwkur7.mongodb.net/?retryWrites=true&w=majority/filmes_db';

const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect(MONGODB_URL);
        console.log('Conexão com o MongoDB estabelecida!');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
        throw error;
    }
};

export default connectDB;
