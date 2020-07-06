dev:
	@docker-compose -f ./config/docker-compose.dev.yml up

prod:
	@docker-compose -f ./config/docker-compose.yml up --build