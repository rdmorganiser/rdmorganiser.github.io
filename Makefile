build: vendor
	bundle exec jekyll build

serve: vendor
	bundle exec jekyll serve

vendor:
	bundle install --path vendor

clean:
	rm -rf vendor site

PHONY: build serve clean
