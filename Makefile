dev:
	@docker-compose -f docker-compose.dev.yml up

prod:
	@docker-compose -f docker-compose.yml up --build