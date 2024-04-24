export default {
    name: 'newsCards',
    title: 'News Page  Cards',
    type: 'document',
    fields: [
        {
            name: 'imageUrl',
            title: 'Image URL',
            type: 'image',
            options: {
                hotspot: true, 
            },
        },
        {
            name: 'newsid',
            title: 'News ID',
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
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM-DD',
            },
        },
    ],
};
