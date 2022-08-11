BIN=./node_modules/.bin

SRC_JS=$(shell find src -name '*.js')
LIB_JS=$(patsubst src/%.js, lib/%.js, $(SRC_JS))

all: build

#dev:; @NODE_ENV=development $(MAKE) -j5 webpack-server dev-server watch
dev-server: $(LIB_JS); $(BIN)/nodemon
webpack-server: $(LIB_JS); node ./lib/server/webpack
watch:; $(BIN)/babel -d lib --watch src --plugins=react-hot-loader/babel,@babel/proposal-class-properties --presets=@babel/react,@babel/env

build: js webpack
webpack: public/js/app.js
clean:; rm -rf public lib

public/js/app.js: $(SRC_JS); $(BIN)/webpack
js: $(LIB_JS)
$(LIB_JS): lib/%.js: src/%.js
	mkdir -p $(dir $@)
	$(BIN)/babel --plugins=@babel/proposal-class-properties --presets=@babel/react,@babel/env $< -o $@

.PHONY: all build clean dev dev-server js watch webpack webpack-server
