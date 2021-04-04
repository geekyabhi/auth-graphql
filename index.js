const app = require('./server/server');
require('dotenv').config({path:'./config/dev.env'})

const PORT=process.env.PORT
app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});
