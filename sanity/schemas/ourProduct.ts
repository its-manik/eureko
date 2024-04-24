export default {
    name: 'product',
    title: 'Home Page Our Product',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true, // Enables image cropping
            },
        },
    ],
};
