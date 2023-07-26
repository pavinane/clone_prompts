import { ConnectedDb } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async(req)=>{
    const {userId,prompt,tag} = await req.json();

    try {
        await ConnectedDb();
        const newPrompt = new Prompt({
            creater:userId,
            prompt:prompt,
            tag:tag
        });

        await newPrompt.save();

        return new Response(JSON.stringify(newPrompt),{status:201})
    } catch (error) {
        return new Response("Failed to create new prompt",{status:500})
    }

}