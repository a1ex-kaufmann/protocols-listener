run:
	docker-compose up --build

connect:
	docker exec -it node-docker bash

stop:
	docker-compose down

# for cleaning use
# $ docker stop $(docker ps -a -q)
# $ docker rm $(docker ps -a -q)

