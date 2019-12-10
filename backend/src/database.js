const mongoose = require('mongoose')

console.log(process.env.MONGODB_URI)


mongoose.connect('mongodb://localhost/mernstack',{
     useNewUrlParser: true ,
    useUnifiedTopology: true

}).then((db)=>console.log('db is connected'))
  .catch(err => console.error(err))

