
export default {
    name: 'PricingPlanImage',
    title: 'PricingPlan Page Hero Section Image',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true, 
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string',
                    options: {
                        isHighlighted: true  
                    }
                }
            ]
        },
    ],
};
