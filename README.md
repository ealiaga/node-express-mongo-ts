# Node.js Express API with TypeScript 3


## Description


### Project Introduction
- suppot ES6/ES7 features
- using tslint followed [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)


## Requirements

- node >= 10
- npm >= 6
- mongodb >= 3.0
- typescript >= 3.0


## App skeleton
```
.
├── LICENSE
├── README.md
├── nodemon.json
├── package.json
├── src
│   |── api
│      ├── config
│      │   ├── connection
│      │   │   └── connection.ts
│      │   ├── cron
│      │   │   └── cron.ts
│      │   ├── env
│      │   │   ├── defaults.ts
│      │   │   ├── development.ts
│      │   │   ├── index.ts
│      │   │   └── production.ts
│      │   ├── error
│      │   │   ├── index.ts
│      │   │   └── sendHttpError.ts
│      │   ├── middleware
│      │   │   └── middleware.ts
│      │   ├── router
│      │   │   ├── UserRouter.ts
│      │   │   └── routes.ts
│      │   └── server
│      │       ├── index.ts
│      │       ├── server.ts
│      │       └── serverHandlers.ts
│      ├── controllers
│      │   └── UserController.ts
│      ├── interfaces
│      │   ├── IUserService.ts
│      │   └── ServerInterface.ts
│      ├── models
│      │   └── UserModel.ts
│      └── services
│          └── UserService
│              ├── UserService.ts
│              └── UserValidation.ts
│
├── tsconfig.json
└── tslint.json
```
## Running the API
### Development
To start the application in development mode, run:

```bash
npm install -g nodemon
npm install -g ts-node
npm install -g typescript
npm install
```

Start the application in dev env:
```
nodemon
```
Start the application in production env:

Install ts pm2 and typescript compiler:
```
npm install -g pm2
pm2 install typescript
```

example start with scale on 2 core:
```
pm2 start ./src/index.ts -i 1 \
    && sleep 1 \
    && pm2 scale index 2 --no-daemon
```

Express server listening on http://localhost:3000/, in development mode
The developer mode will watch your changes then will transpile the TypeScript code and re-run the node application automatically.

Create a user:

```bash
curl -X POST \
  http://localhost:3000/v1/users \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{
	"email": "test@gmail.com",
	"name": "test name"
}'
```

Get all users:

```bash
curl -X GET \
  http://localhost:3000/v1/users \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache'
```

Get specific user by ID:

```bash
curl -X GET \
  http://localhost:3000/v1/users/:id \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache'
```

Delete specific user by ID:

```bash
curl -X DELETE \
  http://localhost:3000/v1/users/:id \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache'
```
