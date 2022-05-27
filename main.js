'use strict';

console.log('main.js is alive');

window.onload = () => {
    let post = 'This is a post';

    fetch('/.netlify/functions/hello-world', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                post: post
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
};