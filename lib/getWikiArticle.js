import wiki from 'wikijs'

async function getWikiArticle(url) {
  let page

  try {
    page = await wiki().page(url)
  } catch(e) {
    page = await wiki().find(url)
  }

  return await page.rawContent()
}

export default getWikiArticle
