import User from '../models/User'
import jwt from 'jsonwebtoken'
import config from '../config'
import Role from '../models/Role'

export const signup = async (req,res) => {
    
    const {name,email,phone,password,position,roles} = req.body;
    console.log(name,position)
    const newUser = new User ({
        name,
        email,
        phone,
        position,
        password: await User.encryptPassword(password)
    })
    
    if(roles){
        const foundRoles = await Role.find({name: {$in: roles}})
        newUser.roles = foundRoles.map(role => role._id)
    }else{
        const role = await Role.findOne({name:'user'})
        newUser.roles = [role._id];
    }

    const saveUser = await newUser.save();

    const token = jwt.sign({id: saveUser._id},config.SECRET,{
        expiresIn:86400 // 24 horus
    })    

    res.json({token})
}
export const signin = async (req,res) => {
    const userFound = await (await User.findOne({email: req.body.email}).populate('roles'));
    //populed devuelve los datos de roles con el name, ya no solo el id

    if (!userFound) return  res.status(404).send({message: 'Not found User'})
    
    const matchPassword = await User.comparePassword(req.body.password, userFound.password)

    if(!matchPassword) return res.status(401).send({token: null, message:'Invalid Password', header: res.header.status})
    
    const token = jwt.sign({id: userFound._id}, config.SECRET,{
        expiresIn: 86400
    })

    res.json({token})
}