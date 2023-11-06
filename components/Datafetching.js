import { createClient } from 'next-sanity';


export const client = createClient({
  projectId: "29ijvd69",
  dataset: "production",
  apiVersion: '2021-08-31',
  useCdn: true,
 
});



