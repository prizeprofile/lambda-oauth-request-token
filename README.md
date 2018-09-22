# AWS Lambda: Oauth Request Token

Returns a request token for Prizeprofile Twitter service.

## Enviroment variables

* `TWITTER_KEY` can be found on Twitter developer page.
* `TWITTER_SECRET` can be found on Twitter developer page.
* `CALLBACK_URI` where should be the user redirected after they authorize the app.

## Responses

### 200
```
{
  "token": String,
  "token_secret": String
}
```

### 503
There was an error while obtaining the token from Twitter.

## Deployment
_TODO: Use some AWS automation tool rather than grunt._
Deploy staging with `grunt deploy` and production with `grunt deploy_prod`.

## Tests
Yet to be written.
