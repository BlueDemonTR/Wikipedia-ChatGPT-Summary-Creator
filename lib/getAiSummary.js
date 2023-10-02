import 'openai/shims/node'
import OpenAI from 'openai'

const openai = new OpenAI()

async function getAiSummary(page) {
  return console.log(page)


  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": "Summarize the following page to me under 500 words." + page}
    ],
  })

  console.log(response.choices.map(x => x.message.content))
}

export default getAiSummary
