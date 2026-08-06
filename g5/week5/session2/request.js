const http = require('http');
// client request
// send request
// req >> write >> writeStream
const start = Date.now();
http.request('http://www.google.com',
    (res) => {
        res.on('data', (chunk) => {
        });
        res.on('end', () => {
            console.log('1:request ended at', Date.now() - start)
        })
    }
).end();
http.request('http://www.google.com',
    (res) => {
        res.on('data', (chunk) => {
        });
        res.on('end', () => {
            console.log('2:request ended at', Date.now() - start)
        })
    }
).end();
http.request('http://www.google.com',
    (res) => {
        res.on('data', (chunk) => {
        });
        res.on('end', () => {
            console.log('3:request ended at', Date.now() - start)
        })
    }
).end();
http.request('http://www.google.com',
    (res) => {
        res.on('data', (chunk) => {
        });
        res.on('end', () => {
            console.log('4:request ended at', Date.now() - start)
        })
    }
).end();
http.request('http://www.google.com',
    (res) => {
        res.on('data', (chunk) => {
        });
        res.on('end', () => {
            console.log('5:request ended at', Date.now() - start)
        })
    }
).end();
http.request('http://www.google.com',
    (res) => {
        res.on('data', (chunk) => {
        });
        res.on('end', () => {
            console.log('6:request ended at', Date.now() - start)
        })
    }
).end();
http.request('http://www.google.com',
    (res) => {
        res.on('data', (chunk) => {
        });
        res.on('end', () => {
            console.log('7:request ended at', Date.now() - start)
        })
    }
).end();
http.request('http://www.google.com',
    (res) => {
        res.on('data', (chunk) => {
        });
        res.on('end', () => {
            console.log('8:request ended at', Date.now() - start)
        })
    }
).end();
http.request('http://www.google.com',
    (res) => {
        res.on('data', (chunk) => {
        });
        res.on('end', () => {
            console.log('9:request ended at', Date.now() - start)
        })
    }
).end();
http.request('http://www.google.com',
    (res) => {
        res.on('data', (chunk) => {
        });
        res.on('end', () => {
            console.log('10:request ended at', Date.now() - start)
        })
    }
).end();