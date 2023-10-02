import './config'

import { askInput, getAiSummary, getWikiArticle } from './lib'

async function main() {
  const url = await askInput('Insert Wikipedia url or title')

  const wikipediaPage = await getWikiArticle(url)

  await getAiSummary(wikipediaPage)
}

main()
/*


const api = new ChatGPTAPI({
  apiKey
})

async function ask() {
  const res = await api.sendMessage('Hello World!')
  console.log(res.text)
}

ask()
*/
