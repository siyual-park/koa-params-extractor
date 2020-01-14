# Koa Params Extractor

**Extract Koa's request parameters**

​    

Helps to get parameters (headers, params, query, body) that can be distributed or in different locations in a consistent way

1. find in alias location. (ctx.xxx)
2. find in req location. (ctx.req.xxx)
3. find in request location. (ctx.request.xxx)

​    

## Install

```shell
$ npm i koa-params-extractor
```

​    

## Usage

```js
const paramsExtractor = require('koa-params-extractor');

router.post('/user', async (ctx) => {
  const request = paramsExtractor.extract(ctx);
    
  const { id } = request.params;
  const { username, password } = request.body;

  const response = await signUpUser({ id, username, password });
  ctx.body = response;
});
```

