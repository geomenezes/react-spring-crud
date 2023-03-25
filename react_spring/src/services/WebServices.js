const URL = 'http://localhost:3000/';

export default function post(req, body) {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(body)
    };

    fetch(URL + req, requestOptions)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err.message);
        });
}

export default function get(req) {

    const headers = { 'Content-Type': 'application/json; charset=UTF-8' }
    fetch(URL + req, { headers })
        .then(response => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err.message);
        });    
}