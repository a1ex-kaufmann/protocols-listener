# protocols-listener
demo app for tcp, upd, websockerts listening

### run

```
make run
```

### calls from inside (in another terminal):
```
make connect
node scripts/send-udp.js 5000 dfgh
node scripts/send-tcp.js 6000 asfd
node scripts/send-ws.js 9000
curl 127.0.0.1:8000
```

### calls from outside (in another terminal):
```
node scripts/send-udp.js 5001 dfgh
node scripts/send-tcp.js 6001 asfd
node scripts/send-ws.js 9001
curl 127.0.0.1:8001
telnet 127.0.0.1 6001
```

### clear all docker containers
```
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
```