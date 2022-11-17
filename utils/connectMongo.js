import mongoose from "mongoose";

const connect=async()=>mongoose.connect(process.env.DB_URL)
export default connect;