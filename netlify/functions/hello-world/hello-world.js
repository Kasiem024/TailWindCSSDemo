// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
require('dotenv').config();
const puppeteer = require('puppeteer');

const handler = async(event) => {
    try {
        console.log(JSON.parse(event.body));
        console.log(process.env.TEST);

        let URL = 'https://www.google.com/search?q=jacquelines';

        // Create a webscraper with puppeteer
        const browser = await puppeteer.launch({
            headless: false,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });

        const page = await browser.newPage();
        await page.goto(URL);

        await page.waitForTimeout(5000);

        const subject = JSON.parse(event.body) || 'World'
        return {
            statusCode: 200,
            body: JSON.stringify({ message: `Hello ${subject}` }),
            // // more keys you can return:
            // headers: { "headerName": "headerValue", ... },
            // isBase64Encoded: true,
        }
    } catch (error) {
        return { statusCode: 500, body: error.toString() }
    }
}

module.exports = { handler }