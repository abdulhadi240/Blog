import { NextApiRequest, NextApiResponse } from 'next';
import {client} from '../../components/Datafetching'; // Import the Sanity client

type ResponseData = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const authHeader = req.headers.authorization;
  const name = req.query.title as string | undefined;
  const body = req.body;
  console.log(authHeader);
  
  if (authHeader == 'Bearer 123456789') {
    try {
      let data: any;
      if (!name) {
        data = await client.fetch(`*[_type == 'post']`,{
          next:{
            revalidate:10
          }
        });
      } else {
        data = await client.fetch(`*[_type == 'post' && Title == '${name}']`),{
          next:{
            revalidate:10
          }
        };
      }
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching data' });
    }
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
}