# API Explorer

[Live Demo](https://laed37.github.io/api-explorer)

A front-end React web-application that allows users to explore a RESTful API using most valid HTTP methods. All requests uses the fetch web API to serve responses the API explorer server (json-server).

## Response
API Explorer returns an array of objects corresponding to the body of each entry.  Key-value pairs of HTML5 input attributes represent schema data.

```json
{
  "id": 0,
  "body": [
    {
      "name": "Full Name",
      "type": "text",
      "value": "John Doe",
      "placeholder": "John Doe",
      "minLength": 4,
      "required": true
    },
    {
      "name": "Email",
      "type": "email",
      "value": "john_doe@email.com",
      "placeholder": "John_Doe@email.com",
      "maxLength": 32,
      "required": true
    },
    {
      "name": "Phone",
      "type": "tel",
      "value": "555 555 5555",
      "pattern": "^\\d{3}\\s\\d{3}\\s\\d{4}$",
      "placeholder": "### ### #####"
    }
  ]
}
```

## Usage

Clone the repo and edit *`App_data.js`* and change the `API_URL` in *`App_util.js`*

```bash
$ git clone https://github.com/laed37/api-explorer.git
```

Add your own resource data into *`src/App_data.js`*. Note that the keys in each object correspond to props as defined in *`src/ApiComponent`*.

```js
const myResourceData = [
  {
    resource: 'users',
    route: '/users',
    routeTitle: 'List Users',
    routeDescription: 'Returns a list of available users',
    method: 'GET'
  },
]
```
Change the `API_URL` in *`App_util.js`*
```js
const API_URL = 'YOUR_API_URL'
```

## API

### Users

#### methods

##### `GET /users`
Returns a list of all user entries

##### `POST /users`
Creates a new user using full-name, email, and phone number (optional)

##### Input parameters
| parameters 	| value              	| type   	| location 	| description                                	|
|------------	|--------------------	|--------	|----------	|--------------------------------------------	|
| full name  	| John Doe           	| `string` 	| body     	| full name of the new user                  	|
| email      	| john_doe@email.com 	| `string` 	| body     	| valid email of the new user                	|
| phone      	| 555 555 5555       	| `string` 	| body     	| 10-digit (US) phone number of the new user 	|


##### `GET /users/{id}`
Returns data about a user with the entry id

##### Input parameters
| parameters 	| value        	| type    	| location 	| description                                           	|
|------------	|--------------	|---------	|----------	|-------------------------------------------------------	|
| id         	| 1            	| `integer` 	| url      	| Integer index value corresponding to user in database 	|


##### `PATCH /users/${id}`
Updates and returns data about a user with entry id and optional parameters

##### Input parameters
| parameters 	| value                	| type    	| location 	| description                                             	|
|------------	|----------------------	|---------	|----------	|---------------------------------------------------------	|
| id         	| 1                    	| `integer` 	| url      	| Integer index value corresponding to user in database   	|
| full name  	| (*blank*)          	  | `string`  	| body     	| Updates full name of the existing user                  	|
| email      	| (*blank*)            	| `string`  	| body     	| Updates email of the existing user                      	|
| phone      	| 333 333 3333         	| `string`  	| body     	| Updates 10-digit (US) phone number of the existing user 	|


#### `DELETE /users/${id}`
Deletes user from database with the entry id

##### Input parameters
*See `GET /users/{id}`*

### Cars

#### methods

##### `GET /cars`
Returns a list of all vehicle entries

##### `POST /cars`
Creates a new car using make, model, year, and color

##### Input parameters
| parameters 	| value   	| type    	| location 	| description                	|
|------------	|---------	|---------	|----------	|----------------------------	|
| make       	| Hyundai 	| `string`  	| body     	| Make of the new car entry  	|
| model      	| Sonata  	| `string`  	| body     	| Model of the new car entry 	|
| year       	| 2015    	| `integer` 	| body     	| Year of the new car entry  	|
| color      	| white    	| `string`  	| body     	| Color of the new car entry 	|

##### `GET /cars/${id}`
Returns a data about a vehicle entry in the database

##### Input parameters
| parameters 	| value   	| type    	| location 	| description                                              	|
|------------	|---------	|---------	|----------	|----------------------------------------------------------	|
| id         	| 1       	| `integer` 	| url      	| Integer index value corresponding to vehicle in database 	|

##### `PATCH /cars/${id}`
Updates and returns data about a car with entry id and optional parameters

##### Input parameters
| parameters 	| value   	| type    	| location 	| description                                              	|
|------------	|---------	|---------	|----------	|----------------------------------------------------------	|
| id         	| 1       	| `integer` 	| url      	| Integer index value corresponding to vehicle in database 	|
| make       	| (*blank*) 	| `string`  	| body     	| Updates make of the existing car entry                   	|
| model      	| (*blank*)  	| `string`  	| body     	| Updates model of the existing car entry                  	|
| year       	| (*blank*)    	| `integer` 	| body     	| Updates year of the existing car entry                   	|
| color      	| blue    	| `string`  	| body     	| Updates color of the existing car entry                  	|

##### `DELETE /cars/${id}`
Deletes car from database with the entry id

##### Input parameters
*See `GET /cars/{id}`*

## Built with API Explorer
- [create-react-app](https://github.com/facebookincubator/create-react-app): Create react apps with no build configuration
- [json-server](https://github.com/typicode/json-server): Get a full fake REST API with zero coding in less than 30 seconds


## Future
- Nested routes with associated data, e.g. `/users/1/cars`
- Custom routes/input parameters/schema
