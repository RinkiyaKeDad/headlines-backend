const got = require('got');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const url = 'https://timesofindia.indiatimes.com/home/headlines';

const getHeadlines = async (req, res, next) => {
  const response = await got(url);
  const dom = new JSDOM(response.body);
  let headlines = [
    ...dom.window.document.querySelectorAll('li > span > a'),
  ].map(headline => headline.textContent);

  //   console.log(headlines);
  //   console.log(headlines.length);

  res.json({
    headlines,
  });
};

exports.getHeadlines = getHeadlines;
