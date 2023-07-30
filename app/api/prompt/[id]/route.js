import { ConnectedDb } from "@utils/database";
import Prompt from "@models/prompt";

// Get (read)

export const GET = async (request, { params }) => {
  try {
    await ConnectedDb;

    const prompt = await Prompt.findById(params.id).populate("creater");

    if (!prompt) return new Response("Prompt not found", { status: 404 });

    return new Response(JSON.stringify(prompt), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to fetch", {
      status: 500,
    });
  }
};
// Patch (update)

export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json();

  try {
    await ConnectedDb();

    const existingPrompt = await Prompt.findById(params.id);
    if (!existingPrompt)
      return new Response("Prompt Not Found", {
        status: 404,
      });

    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();

    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to update prompt",{
        status:500
    })
  }
};

// Delete

export const DELETE = async (request,{params}) => {
    try {
        await ConnectedDb();
        await Prompt.findByIdAndRemove(params.id);

        return new Response("Prompt Detele Succesfullt",{status:200})
    } catch (error) {
        return new Response("Failed to Delete Prompt",{status:500})
    }
    

   
}
