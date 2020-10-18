import {Schema, model} from 'mongoose';
import bcrypt from 'bcryptjs'

const userSchema = new Schema({
    name:{
        type: String,
        unique: false
    },
    email:{
        type: String,
        unique: true
    },
    phone:{
        type: String,
        unique: false
    },
    password:{
        type: String,
        required: true
    },
    position:{
        type: String,
        required: false
    },
    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId
    }]
},{
    timestamps: true,
    versionKey: false
});

userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password,salt)
}

userSchema.statics.comparePassword = async (password,receivePassword) => {
    return await bcrypt.compare(password, receivePassword)
}

export default model('User', userSchema);