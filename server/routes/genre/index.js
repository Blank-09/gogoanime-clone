import express from 'express'
import { extractData, fetchHTMLPage } from '../../utils/index.js'

const router = express.Router()

router.get('/:genre', async (req, res) => {
  const page = req.query.page || 1
  const raw = await fetchHTMLPage(`/genre/${req.params.genre}?page=${page}`)

  res.json(extractData(raw))
})

export default router