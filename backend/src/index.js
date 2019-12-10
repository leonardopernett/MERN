require('dotenv').config();

const app = require('./app.js')

require('./database.js')


async function main (){
   await app.listen(app.get('port'))
   console.log('server on port 4000')
}
main()


