import {client} from '../../components/Datafetching'; // Import the Sanity client
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
   try {
     // Fetch all blogs from Sanity
     const blogs = await client.fetch(`*[_type == "post"]`);
     res.status(200).json(blogs);
   } catch (error) {
     console.error(error);
     res.status(500).json({ error: 'An error occurred while'})
   }


}