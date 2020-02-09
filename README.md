# Koa Params Extractor ![](https://img.shields.io/npm/dm/koa-params-extractor.png?style=flat-square)

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
  const { id, username, password } = paramsExtractor.extract(ctx);
    
  const response = await signUpUser({ id, username, password });
  ctx.body = response;
});
```

​    

### Parameters

```js
function Parameter(
  where = new Where(null, true, true, true),
  options = { name: null, combineLevel: 0, as: null }
) {
  this.where = where;
  this.name = options.name;
  this.combineLevel = options.combineLevel;
  this.as = options.as;
}

function Where(name, koaRequest, nodeRequest, context) {
  this.name = name;
  this.koaRequest = koaRequest;
  this.nodeRequest = nodeRequest;
  this.context = context;
}
```

- Parameters defines the information of the parameters to pass.
  - `where` defines where to find the parameter.
    - If `where` is not an instance of `Where`, the parameter is `where` .
    - If `where` is not an instance of `Where`, the parameter is found in `ctx` with information from `where`.
  - `name` is the name of the parameter.
    - If `name` exists, the same name is taken from the parameter's location.
  - `combineLevel` is the level at which the imported arguments are to be combined.
    - `0` means the imported parameter is the parameter to pass.
    - `1` means the imported parameter is a child of the parameter to pass.
  - `as` specifies a name when passing a parameter.
- Where defines where to find the parameter.
  - `name` is the name of the location from which to retrieve the parameter.
  - `koaRequest` means to find the location of a parameter in `ctx.request`.
  - `nodeRequest` means to find the location of a parameter in `ctx.req`.
  - `context` means to find the location of a parameter in `ctx`.

- The default value is params, query, header, body, cookies defined.

​    