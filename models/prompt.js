import {model,models,Schema} from "mongoose";


const promptSchema = new Schema({
    creater:{
        type:Schema.Types.ObjectId,
        ref:'User',
    },
    prompt:{
        type:String,
        required:[true,'Prompt is required'],
    },
    tag:{
        type:String,
        require:[true,"Tag is required"]
    }
})
const Prompt = models.Prompt || model("Prompt", promptSchema);

export default Prompt;