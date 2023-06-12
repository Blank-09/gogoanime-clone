import HTMLParser from 'node-html-parser'
import express from 'express'
import { fetchHTML, fetchHTMLPage } from '../../utils/index.js'

const router = express.Router()
const domain = '/'

router.get('/', (req, res) => {
  res.json({ message: 'Hello from express!' })
})

router.get('/search', async (req, res) => {
  const keyword = req.query.q
  console.log('Searching for ' + keyword)
  const raw = await fetchHTML(
    `/site/loadAjaxSearch?keyword=${keyword}&id=-1&link_web=${domain}`
  )

  const html = HTMLParser.parse(JSON.parse(raw).content)
  const data = html.querySelectorAll('.ss-title')
  const result = []

  data.forEach((element) => {
    const title = element.text
    const url = element.getAttribute('href')
    const image = element
      .querySelector('div')
      .getAttribute('style')
      .match(/url\("(.*?)"\)/)[1]
    result.push({ title, image, url })
  })

  res.json(result)
})

router.get('/popular-ongoing-update', async (req, res) => {
  const page = req.query.page || 1
  const raw = await fetchHTML(
    `/ajax/page-recent-release-ongoing.html?page=${page}`
  )

  const html = HTMLParser.parse(raw)
  const data = html.querySelectorAll('.added_series_body li')
  const result = []

  data.forEach((element) => {
    const anchor = element.querySelectorAll('a')[1]
    const title = anchor.text.trim();
    const url = anchor.getAttribute('href')
    const image = element.querySelector('.thumbnail-popular')
      .getAttribute('style')
      .match(/url\(['"](.*?)['"]\)/)[1]

    const genresDiv = element.querySelectorAll('.genres a')
    const genres = []

    genresDiv.forEach((genre) => {
      genres.push(genre.getAttribute('title'))
    })

    result.push({ title, image, url, genres });
  })

  res.json(result)
})

router.get('/recent-released-anime', async (req, res) => {
  const page = req.query.page || 1
  const type = req.query.type || 1
  const raw = await fetchHTML(
    `/ajax/page-recent-release.html?page=${page}&type=${type}`
  )

  const html = HTMLParser.parse(raw)
  const data = html.querySelectorAll('.items li')
  const result = []

  data.forEach((element) => {
    const title = element.querySelector('.name').text
    const image = element.querySelector('.img img').getAttribute('src')
    const url = element.querySelector('.name a').getAttribute('href')
    const episode = element.querySelector('.episode').text
    result.push({ title, image, url, episode })
  })

  res.json(result)
})

router.get('/anime-list', async (req, res) => {
  const page = req.query.page || 1
  const raw = await fetchHTMLPage(`/anime-list.html?page=${page}`)

  const html = HTMLParser.parse(raw)
  const data = html.querySelectorAll('.listing li')

  const result = []

  data.forEach((element) => {
    const title = element.querySelector('a').text
    const url = element.querySelector('a').getAttribute('href')
    result.push({ title, url })
  })

  res.json(result)
})

export default router
