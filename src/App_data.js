export const exploreUsersData = [
  {
    resource: 'users',
    route: '/users',
    routeDescription: 'Creates a new user using full-name, email, and phone number (optional)',
    method: 'post',
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
          placeholder: '### ### #####'
        },
        type: 'string',
        location: 'body',
        description: '9-digit (US) phone number of the new user'
      }
    ]
  },
  {
    resource: 'users',
    route: '/users',
    routeDescription: 'Returns a list of available users',
    method: 'get',
    data: []
  },
  {
    resource: 'users',
    route: '/users/{id}',
    routeDescription: 'Returns data about a user from it\'s user id',
    method: 'get',
    data: [
      {
        parameter: 'id',
        attributes: {
          name: 'id',
          type: 'number',
          value: '',
        },
        type: 'integer',
        location: 'url',
        description: 'Integer index value corresponding to user in  database'
      }
    ]
  }
];
