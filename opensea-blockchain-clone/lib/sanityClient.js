import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'bypj7fhm',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skvj89jiG7A6ucFpbtzld8LW7aPJd8XiULhmkvmhUw784LghzIRW3rhd2pvILZzcuLUCRPLOylXTzndSYImnYctry7Gb3JSqYtvo7bUPECnUPYJsEJ6n3JUpCJ8oDi08sxzj7VhOWck4x82A4XXE2FyXl9IiNZALkYzLpGvi70I1w413MJw2',
  useCdn: false,
})
