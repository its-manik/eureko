export default {
    name: 'newsblogpost',
    title: 'News Page Blog Post',
    type: 'document',
    fields: [
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'cardImage',
            title: 'Card Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'cardTitle',
            title: 'Card Title',
            type: 'string',
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'date',
            title: 'Date',
            type: 'datetime',
        },
        {
            name: 'authorName',
            title: 'Author Name',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
    ],
};

