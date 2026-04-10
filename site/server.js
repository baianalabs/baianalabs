import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';
import OpenAI from 'openai';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Configuração Supabase (Caminho pronto para integração)
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const PORT = process.env.PORT || 3001;

// Configuração Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
// Configuração OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

const SYSTEM_PROMPT = `
Você é a baIAna, a assistente inteligente oficial da Baiana Labs.
Seu objetivo é vender os serviços da Baiana Labs, auxiliar os clientes e tirar dúvidas sobre as automações.

Serviços da Baiana Labs:
1. SDR Digital 24/7: Qualifica leads no WhatsApp usando RAG em segundos.
2. Triagem Inteligente: Filtra leads com base no ICP (Perfil de Cliente Ideal).
3. Automação de Follow-up: Reativa leads inativos e agenda reuniões automaticamente.

Seu tom deve ser: Profissional, futurista, prestativo e direto.
Tente sempre levar o usuário a agendar uma conversa ou preencher o formulário de contato.
`;

app.post('/api/chat', async (req, res) => {
  const { message, model, history } = req.body;

  try {
    if (model === 'openai') {
      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...history,
          { role: "user", content: message }
        ],
      });
      return res.json({ response: response.choices[0].message.content });
    } else {
      // Default to Gemini
      const geminiModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      
      const chat = geminiModel.startChat({
        history: history.map(h => ({
          role: h.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: h.content }],
        })),
        generationConfig: {
          maxOutputTokens: 1000,
        },
      });

      // Inject system prompt in the first message if history is empty or as context
      const promptWithSystem = history.length === 0 ? `${SYSTEM_PROMPT}\n\nUsuário: ${message}` : message;
      const result = await chat.sendMessage(promptWithSystem);
      const response = await result.response;
      return res.json({ response: response.text() });
    }
  } catch (error) {
    console.error('Erro na API de Chat:', error);
    res.status(500).json({ error: 'Erro ao processar sua solicitação.' });
  }
});

app.post('/api/register', async (req, res) => {
  const { name, email, company, phone, niche } = req.body;

  try {
    const { data, error } = await supabase
      .from('leads')
      .insert([
        { name, email, company, phone, niche }
      ]);

    if (error) throw error;

    res.json({ success: true, message: 'Protocolo ativado com sucesso!', data });
  } catch (error) {
    console.error('Erro no registro Supabase:', error);
    res.status(500).json({ error: 'Falha ao ativar protocolo. Verifique o banco de dados.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor baIAna rodando na porta ${PORT}`);
});
