import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '???????',
  dataset: 'production',
  apiVersion: 'v1',
  token: '???????',
  useCdn: false,
})
