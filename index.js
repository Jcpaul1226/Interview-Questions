// EDIT THIS FILE TO COMPLETE ASSIGNMENT QUESTION 1
const { time } = require("console");
const { url } = require("inspector");
const { resolve } = require("path");
const { chromium } = require("playwright");

var newStoriesUrl = "https://hacker-news.firebaseio.com/v0/newstories.json";

var newsURL = "https://hacker-news.firebaseio.com/v0/item/";



const fetchData = (url) => {
  return new Promise((resolve,reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
  });
};

const showData = async () => {
  var data = await fetchData(newStoriesUrl);
  data.length = 10;
  data.map(async (d) => {
    let newsData = await fetchData(`${newsURL}${d}.json`);
    const t = newsData["time"];
    console.log(t);
  });
  
}


async function sortHackerNewsArticles() {
  // launch browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();



  // go to Hacker News
  //await page.goto("https://news.ycombinator.com/newest");
}

(async () => {
  //await sortHackerNewsArticles();
})();


showData();
