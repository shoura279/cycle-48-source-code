-- part-1

- node internals
- types of operations
    - API CREATE
      a. check user exist -> libuv -> callback
      b. hash pass -> hash [libuv] , hashSync[Main] ->
      c. create user -> DB -> I/O
      d. send response
    faster than 233 more -> 20s -> 0.0022 

1. Operations handled by libUV -> [thread-pool , worker-threads]
    - cryptography -> [hash - encryption] -> time
    - DNS lockup -> www.facbook.com -> 129.98.76 -> time
    - compression -> [gzlib] -> file -> file.zlib
    - async methods I/O -> [fs]
2. Operations handled by OS threads
    - networking -> http.createServer() , http.request()
3. Operations handled by Main thread
   // callbacks of
    - timers [setTimeout , setInterval]
    - I/O operations
    - setImmediate
    - process.nextTic
    - promises [resolve , reject]

--------------------------
-- part-2

- express

1. middlewares
2. express.json()
3. CRUD
4. API contracts
5. routers
6. errorHandler


