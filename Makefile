current_version = $$(git branch 2>/dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/\1/')
npm_bin= $$(npm bin)

all: server
build:
	jekyll build
server:
	jekyll server
.PHONY: server
