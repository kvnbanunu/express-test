document.addEventListener('DOMContentLoaded', async () => {
    const url = 'https://4537api.banunu.dev/express';

    const get1 = document.getElementById('get1');
    const getjson = document.getElementById('getjson');
    const getcors = document.getElementById('getcors');
    const post1 = document.getElementById('post1');
    const postjson = document.getElementById('postjson');
    const output = document.getElementById('output');
    const post1submit = document.getElementById('post1submit');
    const generate = document.getElementById('generate');

    fetch(url + '/').then((res) => res.json()).then((data) => {get1.value = data});
    fetch(url + '/json').then((res) => res.json()).then((data) => {getjson.value = data.output});
    fetch(url + '/cors').then((res) => res.json()).then((data) => {getcors.value = data});

    post1submit.onclick = () => {
        fetch(url + '/p', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res.json()).then((data) => {post1.value = data});
    }

    generate.onclick = () => {
        fetch(url + '/json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({prompt: postjson.value}),
        }).then((res) => res.json()).then((data) => {output.value = data});
    }
});
