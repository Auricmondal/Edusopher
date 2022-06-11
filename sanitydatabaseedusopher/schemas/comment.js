export default {
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
      {
        name: 'name',
        type: 'string',
      },
      {
        name: 'approved',
        title: 'Approved',
        type: 'boolean',
        description:'Comments will not appear unless Approved'
      },
      {
        name: 'email',
        type: 'string',
      },
      {
        name: 'comment',
        type: 'string',
      },
      {
        name: 'post',
        type: 'reference',
       to: [{type: 'post'}],
      },
    ],
  }
  