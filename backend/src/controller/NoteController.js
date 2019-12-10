const NoteController = {}
const Note = require('../models/note.js')


NoteController.index = async (req, res)=> {
   const notes = await Note.find()
    res.json(notes)
}

NoteController.create = async (req, res)=> {
    const {title, content, author, date } = req.body
   const note = await new Note({
                        title:title,
                        content:content,
                        author:author,
                        date: date
                    })
      await note.save()   
    res.json({status:'note save'})
}

NoteController.edit = async (req, res)=> {
      const {id} = req.params
      const NewNote = await Note.findById(id)
    res.json(NewNote)
}

NoteController.update = async (req, res)=> {
    const {id} = req.params
    const {title, content, author} = req.body
    const data = {
        title,
        content,
        author
    }

    await Note.findByIdAndUpdate(id, data)

    res.json({status:'note update'})
}

NoteController.delete = async (req, res)=> {
    const {id} = req.params
    await Note.findByIdAndRemove(id)
    res.json({status:'note deleted'})
}

module.exports = NoteController