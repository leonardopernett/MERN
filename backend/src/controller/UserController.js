const UserController = {}


const User = require('../models/user.js')


UserController.index = async (req, res)=> {
    const newUser = await User.find()
    res.json(newUser)
}

UserController.create = async (req, res)=> {
     
    const {username}= req.body

    const newuser = await new User({username})
          newuser.save()
    res.json({status:'user saved'})
}

UserController.edit = async (req, res)=> {
    const {id} = req.params
    const user =  await User.findById(id)
    res.json(user)
}

UserController.update = async (req, res)=> {

    const {id} = req.params
    await User.findByIdAndUpdate(id, req.body)
    res.json({status:'user update'})
}

UserController.delete = async (req, res)=> {
     const {id} = req.params
    await User.findByIdAndDelete(id)
    res.json({status:'user deleted'})
}

module.exports = UserController