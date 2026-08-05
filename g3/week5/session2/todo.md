-- node internals

- types of operations
- 1.Operations handled by libuv -> [worker threads , thread pool]
    - Cryptography -> [crypto] -> [ 'hash' , 'encryption']
    - DNS lockup -> [dns] -> www.facebook.com -> 189.33.55.77
    - compression -> [gzlib]
    - async methods I/O -> [fs]

- 2.Operations handled by OS threads
    - networking -> createServer -> send request

- 3.Operations handled by Main thread
  // callbacks of
    - Timers [setTimeout, setInterval]
    - I/O operations
    - setImmediate
    - process.nextTic
    - promises [resolve - reject] -> pending

-- express -> part-2

- middlewares
- express.json()
- CRUD
- api contracts
- router