IMAGE_NAME ?= react-vite-tailwind-starter
IMAGE_TAG ?= v0.0.1
IMAGE := $(IMAGE_NAME):$(IMAGE_TAG)

SERVICE_DIR := .
DOCKERFILE := $(SERVICE_DIR)/Dockerfile

COMPOSE := docker compose
PORT ?= 8080

.PHONY: build start stop logs ps clean

build:
	docker build \
		--pull \
		--file $(DOCKERFILE) \
		--tag $(IMAGE) \
		$(SERVICE_DIR)
start:
	FRONTEND_IMAGE=$(IMAGE) $(COMPOSE) up --detach

stop:
	$(COMPOSE) down --remove-orphans

logs:
	$(COMPOSE) logs --follow --tail=100

ps:
	$(COMPOSE) ps

clean:
	docker image rm $(IMAGE)