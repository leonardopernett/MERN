const {Schema, model, set} = require('mongoose')

set('useCreateIndex', true)


const UserSchema = new Schema({

    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }
},{
    timestamps:true
})

module.exports = model('User',UserSchema)