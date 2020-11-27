import {Schema, model} from 'mongoose'

const movementSchema = new Schema({
    provider: String,
    invoice: String,
    price_unit: Number,
    price_total: Number,
    quantity: Number,
    type_movement: String,
    date: Date,
}, {
    timestamps: true,
    versionKey: false
})

export default model('Movement', movementSchema);