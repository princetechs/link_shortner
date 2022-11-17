import { Schema,model,models } from "mongoose";

const userSchema=new Schema({

     code:{
        type:String,
        unique:true,
        default:"sad223"
     }
});
const users=models.users || model(users,userSchema)

export default users;