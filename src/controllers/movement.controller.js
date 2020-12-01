import Movement from '../models/Movement'

export const createMovement = async (req,res) => {
    
    const {provider, invoice, price_unit, price_total, quantity, type_movement, date} = req.body;
    
    const newMovement = new Movement({provider, invoice, price_unit, price_total, quantity, type_movement, date});
    const movementSaved = await newMovement.save();
    console.log("create product")
    res.status(201).json(movementSaved);
}

export const getMovements = async (req,res) => {
    const movements = await Movement.find();
    res.json(movements);
}

export const getMovementById = async (req,res) => {
    const movement = await Movement.findById(req.params.movementId);
    res.status(200).json(movement)
}

export const updateMovementById = async (req,res) => {
    const updateMovement= await Movement.findByIdAndUpdate(req.params.movementId, req.body, {
        new: true
    })
    res.status(200).json(updateMovement)
}

export const deleteMovementById = async (req,res) => {
    const{movementId} = req.params;
    await Movement.findByIdAndRemove(movementId)
    res.status(204).json()
}