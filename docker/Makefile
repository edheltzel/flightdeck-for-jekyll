# import config.
# You can change the default config with `make cnf="config_special.env" build`
instanceFile ?= instance.env
include $(instanceFile)
export $(shell sed 's/=.*//' $(instanceFile))

buildFile ?= build.env
include $(buildFile)
export $(shell sed 's/=.*//' $(buildFile))

# HELP
# This will output the help for each task
# thanks to https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
.PHONY: help

help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help

# DOCKER TASKS

clean: ## Delete current build of the container
	docker rmi $(DOCKER_IMAGE_NAME):$(DOCKER_IMAGE_VERSION)

# Build the container
build: ## Build the container
	docker build -t $(DOCKER_IMAGE_NAME):$(DOCKER_IMAGE_VERSION) -f src/docker/Dockerfile ./src

build-nc: ## Build the container without caching
	docker build --no-cache -t $(DOCKER_IMAGE_NAME) -f src/docker/Dockerfile ./src

run: ## Run container with ports configured in `instance.env`
	docker run \
		-p "$(FLYDECK_PORT):4000" \
		-v "$(APP_DATA_DIR):$(APP_MOUNT_DIR):cached" \
		--env-file=./instance.env \
		--name $(DOCKER_INSTANCE_NAME) \
		--rm -i -t \
		$(DOCKER_IMAGE_NAME):$(DOCKER_IMAGE_VERSION)

up: build run ## Run container on port configured in `instance.env` (Alias to run)

stop: ## Stop and remove a running container
	docker stop $(DOCKER_INSTANCE_NAME); docker rm $(DOCKER_INSTANCE_NAME)

release: build-nc publish ## Make a release by building and publishing the `{DOCKER_IMAGE_VERSION}` ans `latest` tagged containers to ECR

# Docker publish
publish: repo-login publish-latest publish-$(DOCKER_IMAGE_VERSION) ## Publish the `{DOCKER_IMAGE_VERSION}` ans `latest` tagged containers to ECR

publish-latest: tag-latest ## Publish the `latest` taged container to ECR
	@echo 'publish latest to $(DOCKER_REPO)'
	docker push $(DOCKER_REPO)/$(DOCKER_IMAGE_NAME):latest

publish-$(DOCKER_IMAGE_VERSION): tag-$(DOCKER_IMAGE_VERSION) ## Publish the `{DOCKER_IMAGE_VERSION}` taged container to ECR
	@echo 'publish $(DOCKER_IMAGE_VERSION) to $(DOCKER_REPO)'
	docker push $(DOCKER_REPO)/$(DOCKER_IMAGE_NAME):$(DOCKER_IMAGE_VERSION)

# Docker tagging
tag: tag-latest tag-DOCKER_IMAGE_VERSION ## Generate container tags for the `{DOCKER_IMAGE_VERSION}` ans `latest` tags

tag-latest: ## Generate container `{DOCKER_IMAGE_VERSION}` tag
	@echo 'create tag latest'
	docker tag $(DOCKER_IMAGE_NAME) $(DOCKER_REPO)/$(DOCKER_IMAGE_NAME):latest

tag-version: ## Generate container `latest` tag
	@echo 'create tag $(DOCKER_IMAGE_VERSION)'
	docker tag $(DOCKER_IMAGE_NAME) $(DOCKER_REPO)/$(DOCKER_IMAGE_NAME):$(DOCKER_IMAGE_VERSION)

version: ## Output the current DOCKER_IMAGE_VERSION
	@echo $(DOCKER_IMAGE_VERSION)
