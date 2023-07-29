import { ConnectedDb } from "@utils/database";
import Prompt from "@models/prompt";


export const GET = async(request) => {
    try {
        await ConnectedDb;
        
        const prompts = await Prompt.find({}).populate('creater');
        return new Response(JSON.stringify(prompts),{
            status:200
        })
    } catch (error) {
        return new Response("Failed to fetch",{
            status:500
        })
    }
}