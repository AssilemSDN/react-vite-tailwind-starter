# Active environment file
ENV_FILE ?= .env.dev

# Load the selected environment variables
ifneq ($(wildcard $(ENV_FILE)),)
include $(ENV_FILE)
export
endif

.PHONY: init-env build build-no-cache start stop ps logs restart

init-env:
	@if [ -f "$(ENV_FILE)" ]; then \
		echo "$(ENV_FILE) already exists"; \
	else \
		cp .env.example "$(ENV_FILE)"; \
		echo "$(ENV_FILE) created from .env.example"; \
	fi

build:
	docker build -t $(DOCKER_IMAGE_NAME_WEBAPP):$(DOCKER_IMAGE_TAG_WEBAPP) .

build-no-cache:
	docker build --no-cache -t $(DOCKER_IMAGE_NAME_WEBAPP):$(DOCKER_IMAGE_TAG_WEBAPP) .

start:
	docker compose --env-file $(ENV_FILE) up --build --force-recreate --detach --remove-orphans

stop: 
	docker compose --env-file $(ENV_FILE) down

ps:
	docker compose --env-file $(ENV_FILE) ps
	
logs:
	docker compose --env-file $(ENV_FILE) logs -f

restart: stop start