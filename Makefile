all:
	@$(MAKE) build

build: npm assets

start:
	@npm run webpack:watch

assets:
	@npm run webpack

npm:
	@npm install

lint:
	@npm run -s lint_js

clean-assets:
	@rm -rf public/js/*.js*
	@rm -rf public/css/*.css*

clean: clean-assets
	@rm -rf node_modules
	@find . -name \*.swp -delete

.PHONY: all build start assets npm lint clean-assets clean
