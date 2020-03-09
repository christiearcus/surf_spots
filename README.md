# README

This is a pet project for discovering surf spots

## Installation

TBC

## Run locally

client

```
sh -c 'rm -rf public/packs/* || true && bundle exec rake react_on_rails:locale && bin/webpack -w'
```

server

```
bundle exec puma -C config/puma.rb
```

## Deploy with Heroku

- Login to Heroku with the correct remote set
- Make sure your changes are on the master branch
- `git push heroku master`

## Tests

`rspec`

For single specs

`rspec [FILE PATH HERE]`

## Get API results

There is currently one endpoint setup to get a list of surf spots. You can get this at:

```
https://christie-metson-surf-spots.herokuapp.com/api/spots.json
```
