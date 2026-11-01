import mongoose from "mongoose"

mongoose.connect("mongodb://localhost:27017/kg23wp")
    .then(() => {console.log("MongoDB Connected")})
    .catch(err => console.log(err))

export default mongoose