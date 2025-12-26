import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('.'));

// Conexão com o banco
mongoose.connect(process.env.MONGO_URI);

// Esquema atualizado com todos os campos do formulário
const Resposta = mongoose.model('Respostas', {
    senioridade: String,
    discord: String,
    email: String,
    idade: Number,
    objetivo: String,
    data: { type: Date, default: Date.now }
});

// Rota para receber os dados
app.post('/enviar', async (req, res) => {
    try {
        const novaResposta = new Resposta(req.body);
        await novaResposta.save();
        res.json({ ok: true, message: "Dados salvos com sucesso!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));