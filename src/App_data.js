export const resourceUsers = [
  {
    resource: 'users',
    route: '/users',
    routeTitle: 'List Users',
    routeDescription: 'Returns a list of available users',
    method: 'GET'
  },
  {
    resource: 'users',
    route: '/users',
    routeTitle: 'Create User',
    routeDescription: 'Creates a new user using full-name, email, and phone number (optional)',
    method: 'POST',
    data: [
      {
        parameter: 'Full Name',
        attributes: {
          name: 'Full Name',
          type: 'text',
          value: '',
          placeholder: 'John Doe',
          minLength: 4,
          required: true
        },
        type: 'string',
        location: 'body',
        description: 'Full name of the new user'
      },
      {
        parameter: 'Email',
        attributes: {
          name: 'Email',
          type: 'email',
          value: '',
          placeholder: 'John_Doe@email.com',
          maxLength: 32,
          required: true
        },
        type: 'string',
        location: 'body',
        description: 'Valid email of the new user'
      },
      {
        parameter: 'Phone',
        attributes: {
          name: 'Phone',
          type: 'tel',
          value: '',
          pattern: '^\\d{3}\\s\\d{3}\\s\\d{4}$',
          placeholder: '### ### #####'
        },
        type: 'string',
        location: 'body',
        description: '10-digit (US) phone number of the new user'
      }
    ]
  },
  {
    resource: 'users',
    route: '/users/{id}',
    routeTitle: 'Get User',
    routeDescription: 'Returns data about a user from it\'s user id',
    method: 'GET',
    data: [
      {
        parameter: 'id',
        attributes: {
          name: 'id',
          type: 'number',
          value: '',
          placeholder: 1,
          required: true,
          pattern: '\\d*'
        },
        type: 'integer',
        location: 'url',
        description: 'Integer index value corresponding to user in  database'
      }
    ]
  },
  {
    resource: 'users',
    route: '/users/{id}',
    routeTitle: 'Update User',
    routeDescription: 'Updates data about a user with user id',
    method: 'PATCH',
    data: [
      {
        parameter: 'id',
        attributes: {
          name: 'id',
          type: 'number',
          value: '',
          placeholder: 1,
          required: true,
          pattern: '\\d*'
        },
        type: 'integer',
        location: 'url',
        description: 'Integer index value corresponding to user in  database'
      },
      {
        parameter: 'Full Name',
        attributes: {
          name: 'Full Name',
          type: 'text',
          value: '',
          placeholder: 'John Doe',
          minLength: 4,
        },
        type: 'string',
        location: 'body',
        description: 'Update full name of the existing user'
      },
      {
        parameter: 'Email',
        attributes: {
          name: 'Email',
          type: 'email',
          value: '',
          placeholder: 'John_Doe@email.com',
          maxLength: 32,
        },
        type: 'string',
        location: 'body',
        description: 'Update the existing user\'s valid email'
      },
      {
        parameter: 'Phone',
        attributes: {
          name: 'Phone',
          type: 'tel',
          value: '',
          placeholder: '408 555 5555'
        },
        type: 'string',
        location: 'body',
        description: 'Update 10-digit (US) phone number of the existing user'
      }
    ]
  },
  {
    resource: 'users',
    route: '/users/{id}',
    routeTitle: 'Delete User',
    routeDescription: 'Deletes user from database using user id',
    method: 'DELETE',
    data: [
      {
        parameter: 'id',
        attributes: {
          name: 'id',
          type: 'number',
          value: '',
          placeholder: 1,
          required: true,
          pattern: '\\d*'
        },
        type: 'integer',
        location: 'url',
        description: 'Integer index value corresponding to user in  database'
      }
    ]
  }
];

export const resourceCars = [
  {
    resource: 'cars',
    route: '/cars',
    routeTitle: 'List Cars',
    routeDescription: 'Returns a list of vehicle entries in the database',
    method: 'GET'
  },
  {
    resource: 'cars',
    route: '/cars',
    routeTitle: 'Create Car',
    routeDescription: 'Creates a new car using make, model, year, and color',
    method: 'POST',
    data: [
      {
        parameter: 'Make',
        attributes: {
          name: 'Make',
          type: 'text',
          value: '',
          placeholder: 'Hyundai',
          required: true
        },
        type: 'string',
        location: 'body',
        description: 'Make of the new car entry'
      },
      {
        parameter: 'Model',
        attributes: {
          name: 'Model',
          type: 'text',
          value: '',
          placeholder: 'Sonata',
          required: true
        },
        type: 'string',
        location: 'body',
        description: 'Model of the new car entry'
      },
      {
        parameter: 'Year',
        attributes: {
          name: 'Year',
          type: 'number',
          value: '',
          placeholder: '2017',
          required: true
        },
        type: 'integer',
        location: 'body',
        description: 'Valid year of the new car entry'
      },
      {
        parameter: 'Color',
        attributes: {
          name: 'Color',
          type: 'text',
          value: '',
          placeholder: 'blue',
          required: true
        },
        type: 'string',
        location: 'body',
        description: 'Color of the new car entry'
      }
    ]
  },
  {
    resource: 'cars',
    route: '/cars/{id}',
    routeTitle: 'Get Car',
    routeDescription: 'Returns data about a car with it\'s id',
    method: 'GET',
    data: [
      {
        parameter: 'id',
        attributes: {
          name: 'id',
          type: 'number',
          value: '',
          placeholder: 1,
          required: true,
          pattern: '\\d*'
        },
        type: 'integer',
        location: 'url',
        description: 'Integer index value corresponding to a car in the database'
      },
    ]
  },
  {
    resource: 'cars',
    route: '/cars/{id}',
    routeTitle: 'Update Car',
    routeDescription: 'Updates data about a car with a valid car id',
    method: 'PATCH',
    data: [
      {
        parameter: 'id',
        attributes: {
          name: 'id',
          type: 'number',
          value: '',
          placeholder: 1,
          required: true,
          pattern: '\\d*'
        },
        type: 'integer',
        location: 'url',
        description: 'Integer index value corresponding to a car in the database'
      },
      {
        parameter: 'Make',
        attributes: {
          name: 'Make',
          type: 'text',
          value: '',
          placeholder: 'Hyundai'
        },
        type: 'string',
        location: 'body',
        description: 'Updates the make of the existing car'
      },
      {
        parameter: 'Model',
        attributes: {
          name: 'Model',
          type: 'text',
          value: '',
          placeholder: 'Sonata'
        },
        type: 'string',
        location: 'body',
        description: 'Updates the model of the existing car'
      },
      {
        parameter: 'Year',
        attributes: {
          name: 'Year',
          type: 'number',
          value: '',
          placeholder: '2017'
        },
        type: 'integer',
        location: 'body',
        description: 'Updates the year of the existing car'
      },
      {
        parameter: 'Color',
        attributes: {
          name: 'Color',
          type: 'text',
          value: '',
          placeholder: 'blue'
        },
        type: 'string',
        location: 'body',
        description: 'Updates color of the existing car'
      }
    ]
  },
  {
    resource: 'cars',
    route: '/cars/{id}',
    routeTitle: 'Delete Car',
    routeDescription: 'Deletes car from database using car id',
    method: 'DELETE',
    data: [
      {
        parameter: 'id',
        attributes: {
          name: 'id',
          type: 'number',
          value: '',
          placeholder: 1,
          required: true,
          pattern: '\\d*'
        },
        type: 'integer',
        location: 'url',
        description: 'Integer index value corresponding to car in  database'
      }
    ]
  }
];
