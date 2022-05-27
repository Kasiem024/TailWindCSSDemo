// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
require('dotenv').config()
const handler = async(event) => {
    try {
        console.log(JSON.parse(event.body).post);
        console.log(process.env.TEST);

        const subject = JSON.parse(event.body).post || 'World'
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