import Role from '../models/Role'

export const createRole = async (req,res) => {
    const {name} = req.body
    
    const newRole = new Role({name})
    const roleSaved = await newRole.save()

    res.status(201).json(roleSaved)
}

export const getRoles = async (req,res) => {
    const roles = await Role.find()
    res.json(roles)
}

export const getRoleById = async (req,res) => {
    const role = await Role.findById(req.params.roleId)
    res.status(200).json(role)
}

export const updateRoleById = async (req,res) => {
    const updateRole = await Role.findByIdAndUpdate(req.params.roleId, req.body, {
        new: true
    })
    res.status(200).json(updateRole)
}

export const deleteRoleById = async (req,res) => {
    const{roleId} = req.params
    await Role.findByIdAndRemove(roleId)
    res.status(204).json()
}