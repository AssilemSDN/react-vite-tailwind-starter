# Active environment file
ENV_FILE ?= .env.dev

# Load the selected environment variables
include $(ENV_FILE)
export

.PHONY: build build-no-cache start stop ps logs restart

build:
	docker build -t $(DOCKER_IMAGE_NAME_WEBAPP):$(DOCKER_IMAGE_TAG_WEBAPP) .

build-no-cache:
	docker build --no-cache -t $(DOCKER_IMAGE_NAME_WEBAPP):$(DOCKER_IMAGE_TAG_WEBAPP) .

start:
	docker compose --env-file $(ENV_FILE) up --force-recreate --detach --remove-orphans

stop: 
	docker compose --env-file $(ENV_FILE) down

ps:
	docker compose --env-file $(ENV_FILE) ps
	
logs:
	docker compose --env-file $(ENV_FILE) logs -f

restart: stop start