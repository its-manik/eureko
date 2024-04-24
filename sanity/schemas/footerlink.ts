
export default {
  name: 'footerlinks',
  title: 'Footer Pages Links',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{ 
        type: 'document',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
          },
          {
            name: 'url',
            title: 'URL',
            type: 'string',
          },
        ]
      }],
    },
  ],
};
