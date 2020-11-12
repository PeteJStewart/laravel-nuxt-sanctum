# Laravel Nuxt Sanctum Starter

This is a fork of https://github.com/zondycz/laravel-nuxt-sanctum to be used for Cypress testing


## Laravel API Setup
To get the Laravel API running you'll need to navigate into the [api](/api)
directory, copy the [.env.example](/api/.env.example) file to .env and then update the database connection.
Once this has been done, you can then run the migrations and database seeder.

```bash
cd app/

# Run composer install if this is the first time using
composer install

cp .env.example .env

# create a database and update the database connection details.
# this could be a sqlite db file

php artisan migrate
php artisan db:seed
```

Now the Laravel API should be setup, you can run artisan serve from the api directory.
This will start the server on http://127.0.0.1:8000

```bash
php artisan serve
```

## Nuxt setup
To setup nuxt, you also need to copy the [.env.example](/client/.env.example) file to .env,
install dependencies and then run `yarn dev`.

```bash
# from the root directory
cd client/
cp .env.example .env
yarn install
yarn dev
```

Now navigate to http://127.0.0.1:3000 and you should see the login screen.
You should be able to login with the following credentials:

```
# Email
admin@admin.com
# Password
123456
```

## Cypress
you can run Cypress with yarn

```bash
yarn run cypress open
```

If you run the login spec, you should see that it work when the sanctum cookie route is not stubbed,
but fails if it is stubbed.  Ideally we'll aim for a programmatic login where all routs are stubbed.

This way we can have a Nuxt repo that can run inside CI without the need for an API.
We will then generate all fixtures from the API tests.


 Nuxt.js application which will demo the authentication flow using Laravel sanctum. 
 
![zondycz login](https://i.ibb.co/vm0bGmK/screen1.png)
![zondycz dashboard](https://i.ibb.co/sQVjRJZ/my-app.png)

 ## Laravel .env 
 ```
APP_URL=http://127.0.0.1
SESSION_DOMAIN=127.0.0.1
SANCTUM_STATEFUL_DOMAINS=127.0.0.1:3000
```
 
 ## Nuxt .env
 ```
PORT=3000
HOST=127.0.0.1
BASE_URL=http://127.0.0.1:3000
API_URL=http://127.0.0.1:8000
```

 
 
