BIN=./node_modules/.bin

SRC_JS=$(shell find src -name '*.js')
LIB_JS=$(patsubst src/%.js, lib/%.js, $(SRC_JS))

all: build
build: js webpack

dev:; @NODE_ENV=development $(MAKE) -j5 webpack-server dev-server watch
dev-server: $(LIB_JS); $(BIN)/nodemon --harmony

webpack-server: $(LIB_JS); node --harmony ./lib/server/webpack
webpack: public/js/app.js

clean:; rm -rf public lib
watch:; $(BIN)/babel src -d lib --experimental --source -w

public/js/app.js: $(SRC_JS); $(BIN)/webpack
js: $(LIB_JS)
$(LIB_JS): lib/%.js: src/%.js
	mkdir -p $(dir $@)
	$(BIN)/babel $< -o $@ --experimental --source-maps-inline

.PHONY: all js clean webpack dev dev-server webpack-server watch
