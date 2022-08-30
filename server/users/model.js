import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
  },
  password: {
    type: String,
    require: [true, "Please provide a password!"],
  },
  role: {
    type: String,
    require: [true, "mast have role"]
  }
});

export default mongoose.model("Users", UserSchema);
