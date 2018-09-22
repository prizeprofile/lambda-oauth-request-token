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
Is returned when there was an error while obtaining the token from Twitter.

## Deployment
Deploy with `npm run deploy:{env}`.

## Tests
Yet to be written.
