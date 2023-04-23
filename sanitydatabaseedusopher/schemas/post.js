export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'language',
      title: 'Language',
      type: 'reference',
      to: {type: 'language'},
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'reference',
      to: {type: 'category'},
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().max(70)
    },
    {
      name: 'metadesc',
      title: 'meta description',
      type: 'text',
      validation: Rule => Rule.required().max(150)
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      
      fields:[{
        name:'alt',
        type:'text',
        title:'Alternative Text',
        validation: Rule => Rule.max(125)
      },],
    },
    {
      name: 'index',
      title: 'Index',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'reference',
      title: 'Reference',
      type: 'array',
      of:[{
        type:'block',
        marks:{
          annotations:[
            {
              
                name: 'link',
                type: 'object',
                title: 'External link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL'
                  },
                  {
                    title: 'Open in new tab',
                    name: 'blank',
                    description: 'Read https://css-tricks.com/use-target_blank/',
                    type: 'boolean'
                  }
                ]
              
            }
          ]
        }
        
      }]
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
