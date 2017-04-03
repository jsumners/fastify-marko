```
$ npm install
$ npm run bench-streaming
$ npm run bench-blocking
```

Results on 2017-04-03:

```
% npm run bench-blocking

> @ bench-blocking /private/tmp/03/fastify-marko
> ./bench.sh blocking

Running 5s test @ http://localhost:3000/blocking
100 connections with 10 pipelining factor

Stat         Avg     Stdev   Max
Latency (ms) 5.2     14.63   388
Req/Sec      17839.2 3846.27 20079
Bytes/Sec    3.68 MB 767 kB  4.19 MB

89k requests in 5s, 18.5 MB read
250 errors (0 timeouts)
```

```
% npm run bench-streaming

> @ bench-streaming /private/tmp/03/fastify-marko
> ./bench.sh streaming

Running 5s test @ http://localhost:3000/streaming
100 connections with 10 pipelining factor

Stat         Avg     Stdev   Max
Latency (ms) 12.3    39.64   515
Req/Sec      7897.6  1283.73 8983
Bytes/Sec    1.83 MB 301 kB  2.1 MB

39k requests in 5s, 9.12 MB read
250 errors (0 timeouts)
```
