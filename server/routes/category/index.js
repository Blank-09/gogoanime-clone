import express from 'express'
import HTMLParser from 'node-html-parser'

const router = express.Router()

import { fetchHTMLPage } from '../../utils/index.js'

router.get('/:name', async (req, res) => {
  const raw = await fetchHTMLPage(`/category/${req.params.name}`)
  const html = HTMLParser.parse(raw)

  const detailsDiv = html.querySelector('.anime_info_body_bg')
  const image = detailsDiv.querySelector('img').getAttribute('src')
  const title = detailsDiv.querySelector('h1').text
  const details = detailsDiv.querySelectorAll('p.type')

  const result = {
    image,
    title,
    details: {
      type: details[0].text.replace('Type: ', '').trim(),
      plot: details[1].text
        .replace('Plot Summary: ', '')
        .trim()
        .replaceAll(/\s+/g, ' '),
      genres: details[2].text.replace('Genre: ', '').trim().split(', '),
      released: details[3].text.replace('Released: ', '').trim(),
      status: details[4].text.replace('Status: ', '').trim(),
      otherName: details[5].text.replace('Other name: ', '').trim(),
    },
  }

  res.json(result)
})

export default router
