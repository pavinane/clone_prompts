import { ConnectedDb } from "@utils/database";
import Prompt from "@models/prompt";


export const GET = async(request,{params}) => {
    try {
        await ConnectedDb;
        
        const prompts = await Prompt.find({
            creater:params.id
        }).populate('creater');
        return new Response(JSON.stringify(prompts),{
            status:200
        })
    } catch (error) {
        return new Response("Failed to fetch",{
            status:500
        })
    }
}