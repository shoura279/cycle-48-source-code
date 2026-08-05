const http = require('node:http');
const start = Date.now();
// send request
http.request('http://www.google.com',
    (res) => {
        res.on('data', (chunk) => {

        });
        res.on('end', () => {
            console.log('1request ended at', Date.now() - start);
        })
    }
).end();
http.request('http://www.google.com',
    (res) => {
        res.on('data', (chunk) => {

        });
        res.on('end', () => {
            console.log('2request ended at', Date.now() - start);
        })
    }
).end();
http.request('http://www.google.com',
    (res) => {
        res.on('data', (chunk) => {

        });
        res.on('end', () => {
            console.log('3request ended at', Date.now() - start);
        })
    }
).end();
http.request('http://www.google.com',
    (res) => {
        res.on('data', (chunk) => {

        });
        res.on('end', () => {
            console.log('4request ended at', Date.now() - start);
        })
    }
).end();
http.request('http://www.google.com',
    (res) => {
        res.on('data', (chunk) => {

        });
        res.on('end', () => {
            console.log('5request ended at', Date.now() - start);
        })
    }
).end();
http.request('http://www.google.com',
    (res) => {
        res.on('data', (chunk) => {

        });
        res.on('end', () => {
            console.log('6request ended at', Date.now() - start);
        })
    }
).end();
http.request('http://www.google.com',
    (res) => {
        res.on('data', (chunk) => {

        });
        res.on('end', () => {
            console.log('7request ended at', Date.now() - start);
        })
    }
).end();
http.request('http://www.google.com',
    (res) => {
        res.on('data', (chunk) => {

        });
        res.on('end', () => {
            console.log('8request ended at', Date.now() - start);
        })
    }
).end();
http.request('http://www.google.com',
    (res) => {
        res.on('data', (chunk) => {

        });
        res.on('end', () => {
            console.log('9request ended at', Date.now() - start);
        })
    }
).end();
http.request('http://www.google.com',
    (res) => {
        res.on('data', (chunk) => {

        });
        res.on('end', () => {
            console.log('10request ended at', Date.now() - start);
        })
    }
).end();