export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    options: {
        hotspot: true,
    },
    fields: [
        {
            name: 'number',
            title: 'Number',
            type: 'number'
        },
        {
            name: 'name',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'about',
            title: 'About',
            type: 'string'
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug'      
        },
        {
            name: 'tag',
            title: 'Tag',
            type: 'string'
        }
    ]
}