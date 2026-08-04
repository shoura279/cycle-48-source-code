-- express
- create app
- middlewares
- express.json()
- simple crud
`- router`

----------------------
-- node internals

- types of operations -> 3 type

1. Operations run in libuv [thread pool, worker threads] -> pbkdf2 example
    - Cryptography -> [crypto] ->  [hash , encrypt] -> time
    - DNS lockup >> [dns] -> www.facebook.com -> 198.179.12
    - Compression >> [gzlib] -> file -> zlib ->
    - async methods I/O [fs] -> readFile >>

2. Operations run on OS -> send request example
    - Networking -> send request - createServer

3. Operations run Main thread
    - callbacks of
        - Timers [setTimeout , setInterval]
        - I/O operations [fs]
        - setImmediate
        - process.nextTic
        - Promises [resolve , reject] - pending {resolve - reject}

-----------------------------
-- extra

- $env:UV_THREADPOOL_SIZE=16