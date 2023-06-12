import HTMLParser from 'node-html-parser'

const API = 'https://ajax.gogo-load.com'
const domain = 'https://gogoanime.llc'

/**
 * fetches HTML from a given url
 * @param {String} url
 * @returns {Promise<String>}
 */

export async function fetchHTML(url) {
  const reqest = await fetch(API + url)
  return await reqest.text()
}

/**
 * fetches HTML Page from a given url
 * @param {String} url
 * @returns {Promise<String>}
 */

export async function fetchHTMLPage(url) {
  const reqest = await fetch(domain + url)
  return await reqest.text()
}

/**
 * jQuery Selector like function
 * @param {HTMLElement} element
 * @param {String} query
 * @returns {HTMLElement | null}
 */

export function $(element, query) {
  return element.querySelector(query)
}

/**
 * Parses and Extracts the HTML data
 * @param {String} raw
 * @returns {Array<{title: string;url: string; image: string; released: string}>}
 */

export function extractData(raw) {
  const html = HTMLParser.parse(raw)
  const data = html.querySelectorAll('.items li')

  const result = []

  data.forEach((element) => {
    result.push({
      title: $(element, '.name').text,
      image: $(element, '.img img').getAttribute('src'),
      url: $(element, '.name a').getAttribute('href'),
      released: $(element, '.released').text.replace('Released: ', '').trim(),
    })
  })

  return result
}
