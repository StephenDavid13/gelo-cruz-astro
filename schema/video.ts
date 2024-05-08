import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'videoID',
      title: 'Video ID',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      videoID: 'videoID',
    },
    prepare(selection) {
      const {title} = selection
      return {...selection, title: title}
    },
  },
})
