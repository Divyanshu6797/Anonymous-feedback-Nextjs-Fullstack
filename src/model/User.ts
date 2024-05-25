import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
  content: string;
  createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
  content: { type: String, required: true },
  createdAt: { type: Date, required : true, default: Date.now },
});

export interface User extends Document {
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isAcceptingMessage : boolean;
    message : Message[];
    isVerified : boolean;
  }
const UserSchema: Schema<User> = new Schema({
    username: { type: String, required: [true, "Username is required"] , trim: true, unique: true},
    email: { type: String, required: [true, "Email is required"], unique: true, match: [/\S+@\S+\.\S+/, "Please enter a valid email"]},
    password: { type: String, required: [true, "Password is required"], minlength: [6, "Password must be at least 6 characters"]},
    verifyCode: { type: String, required: [true, "Verify code is required" ] },
    verifyCodeExpiry: { type: Date, required: [true, "Verify code expiry is required" ]},
    isAcceptingMessage: { type: Boolean, required: true, default: true },
    message: [MessageSchema],
    isVerified: { type: Boolean, required: true, default: false },
    });  

const UserModel = mongoose.models.User as mongoose.Model<User> || mongoose.model<User>("User", UserSchema);

export default UserModel;
