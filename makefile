build:
	docker build --tag node-docker .

run:
	docker run --name node-docker node-docker

ps:
	docker ps

connect:
	docker exec -it node-docker bash

stop:
	docker stop node-docker
	docker rm node-docker

# for cleaning use
# $ docker stop $(docker ps -a -q)
# $ docker rm $(docker ps -a -q)

