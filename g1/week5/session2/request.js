const http = require('node:http');
// sending req >> req -> object -> writeStream
const start = Date.now();//1:00
http.request('http://www.google.com', (res) => {
    // res -> object -> readStream
    res.on('data', (chunk) => {
    });
    res.on('end', () => {
        console.log('1:req...res ended', Date.now() - start);// 2:00
    })
}).end();
http.request('http://www.google.com', (res) => {
    // res -> object -> readStream
    res.on('data', (chunk) => {
    });
    res.on('end', () => {
        console.log('2:req...res ended', Date.now() - start);// 2:00
    })
}).end();
http.request('http://www.google.com', (res) => {
    // res -> object -> readStream
    res.on('data', (chunk) => {
    });
    res.on('end', () => {
        console.log('3:req...res ended', Date.now() - start);// 2:00
    })
}).end();
http.request('http://www.google.com', (res) => {
    // res -> object -> readStream
    res.on('data', (chunk) => {
    });
    res.on('end', () => {
        console.log('4:req...res ended', Date.now() - start);// 2:00
    })
}).end();
http.request('http://www.google.com', (res) => {
    // res -> object -> readStream
    res.on('data', (chunk) => {
    });
    res.on('end', () => {
        console.log('5:req...res ended', Date.now() - start);// 2:00
    })
}).end();

http.request('http://www.google.com', (res) => {
    // res -> object -> readStream
    res.on('data', (chunk) => {
    });
    res.on('end', () => {
        console.log('6:req...res ended', Date.now() - start);// 2:00
    })
}).end();

http.request('http://www.google.com', (res) => {
    // res -> object -> readStream
    res.on('data', (chunk) => {
    });
    res.on('end', () => {
        console.log('7:req...res ended', Date.now() - start);// 2:00
    })
}).end();

http.request('http://www.google.com', (res) => {
    // res -> object -> readStream
    res.on('data', (chunk) => {
    });
    res.on('end', () => {
        console.log('8:req...res ended', Date.now() - start);// 2:00
    })
}).end();

http.request('http://www.google.com', (res) => {
    // res -> object -> readStream
    res.on('data', (chunk) => {
    });
    res.on('end', () => {
        console.log('9:req...res ended', Date.now() - start);// 2:00
    })
}).end();

http.request('http://www.google.com', (res) => {
    // res -> object -> readStream
    res.on('data', (chunk) => {
    });
    res.on('end', () => {
        console.log('10:req...res ended', Date.now() - start);// 2:00
    })
}).end();
