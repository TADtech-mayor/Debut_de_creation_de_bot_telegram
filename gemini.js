// c'est pour pouvoir utiliser mon api stocker dans le fichier .env 
// require('dotenv').config()
const { GoogleGenerativeAI } = require('@google/generative-ai')

// initialisation de gemini avec ma clée 
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const genAI = new GoogleGenerativeAI('AIzaSyBTGUL_98eC9q1p_d8n9TqPQR34_g2JsVk');
// le choix de model de Gemini 
const model = genAI.getGenerativeModel({ model:'gemini-2.5-flash'})

async function askGemini(prompt) {
    const result = await model.generateContent(prompt);
    return result.response.text();
}

module.exports = askGemini;