import type { NextApiRequest, NextApiResponse } from "next";
import sanityClient from "@sanity/client";



const config={
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV === 'production',
    token: process.env.SANITY_API_TOKEN,
}
const client =sanityClient(config);

export default async function createComment(
    req: NextApiRequest,
    res: NextApiResponse){
const {name,email,comment}= JSON.parse(req.body);

try{
    await client.create({
        _type:'contact',
        name,
        email,
        comment,
    });
}catch(err){
    return res.status(500).json({
        message:` Couldn't Submit `,err
    })
}
    


        res.status(200).json({name: 'Submitted Successfully'})
    }
