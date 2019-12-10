const {Schema, model} = require('mongoose')

const NoteSchema = new Schema({
     title:{type:String},
     content:{type:String, required: true},
     author:{type:String},
     date:{type:Date , default: Date.now()}
},{
    timestamps:true
})


module.exports = model('Note',NoteSchema)