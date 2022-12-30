import {defineField, defineType} from 'sanity'
//here we added info about ourself as a schema.
export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'title',
      description: 'Title of skill',
      type: 'string',
    },

    {
      name: 'progress',
      title: 'Progress',
      type: 'number',
      description: 'Progress of skill from 0 to 100%',
      validation: (Rule) => Rule.min(0).max(100),
    },

    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        htspot: true,
      },
    },
  ],
})
