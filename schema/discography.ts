import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'discography',
  title: 'Discography',
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
      name: 'cover',
      title: 'Cover Art',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date',
    }),
    defineField({
      name: 'listenURL',
      title: 'Listen URL',
      type: 'url',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      release: 'releaseDate',
      mainImage: 'cover',
    },
    prepare(selection) {
      const {release} = selection
      return {...selection, subtitle: release}
    },
  },
})
