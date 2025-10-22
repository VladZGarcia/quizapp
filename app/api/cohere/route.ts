import { NextRequest, NextResponse } from 'next/server';

const { CohereClient } = require("cohere-ai");
const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

export async function POST(req: NextRequest) {
  const { input } = await req.json();
  if (!input) {
    return NextResponse.json({ error: 'Missing input' }, { status: 400 });
  }
  try {
    const apiKey = process.env.COHERE_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Missing Cohere API key' }, { status: 500 });
    }
    
    // Calculate number of questions based on input length
    const wordCount = input.trim().split(/\s+/).length;
    let numQuestions;
    
    if (wordCount < 100) {
      numQuestions = 5;
    } else if (wordCount < 300) {
      numQuestions = 10;
    } else if (wordCount < 500) {
      numQuestions = 15;
    } else if (wordCount < 1000) {
      numQuestions = 20;
    } else {
      numQuestions = Math.min(30, Math.floor(wordCount / 50)); // Max 30 questions
    }
    
    const prompt = `Create exactly ${numQuestions} quiz questions based on the input text below. The questions should comprehensively cover all major topics and concepts in the text.

IMPORTANT REQUIREMENTS:
- Generate EXACTLY ${numQuestions} questions
- Cover the ENTIRE text, not just the beginning
- Vary difficulty levels (easy, medium, hard)
- Randomize the position of correct answers
- Make questions specific and detailed
- Include questions from ALL sections of the text

Return the questions in this exact JSON format:
[
  {
    "id": 1,
    "text": "question text",
    "choices": ["answer 1", "answer 2", "answer 3", "answer 4"],
    "answerIndex": 0
  }
]

INPUT TEXT (${wordCount} words):
${input}`;
    let cohereRes;
    try {
      cohereRes = await cohere.chat({
        model: 'command-a-03-2025',
        message: prompt,
        temperature: 0.3
      });
    } catch (cohereError) {
      console.error('Cohere API call failed:', cohereError);
  return NextResponse.json({ error: 'Cohere API call failed', details: typeof cohereError === 'object' ? JSON.stringify(cohereError) : String(cohereError) }, { status: 500 });
    }
    try {
      const content = cohereRes.text || cohereRes.choices?.[0]?.message?.content || '';
      if (!content) {
        console.error('Cohere response missing content:', cohereRes);
        return NextResponse.json({ error: 'Cohere response missing content', details: cohereRes }, { status: 500 });
      }
      return NextResponse.json({ content });
    } catch (parseError) {
      console.error('Error parsing Cohere response:', parseError, cohereRes);
  return NextResponse.json({ error: 'Error parsing Cohere response', details: typeof parseError === 'object' ? JSON.stringify(parseError) : String(parseError), cohereRes }, { status: 500 });
    }
  } catch (e) {
    console.error('Server error:', e);
  return NextResponse.json({ error: 'Server error', details: typeof e === 'object' ? JSON.stringify(e) : String(e) }, { status: 500 });
  }
}
