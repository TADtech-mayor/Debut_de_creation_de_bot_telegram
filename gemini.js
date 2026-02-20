require('dotenv').config()
const { GoogleGenerativeAI } = require('@google/generative-ai')

// initialisation de gemini avec ma clée 
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// le choix de model de Gemini 
const model = genAI.getGenerativeModel({ model:'gemini-1.5-flash'})

async function askGemini(prompt) {
    const result = await model.generateContent(prompt);
    return result.response.text();
}

module.exports = askGemini;