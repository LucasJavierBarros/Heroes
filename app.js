const express = require ('express');
const app = express();
const port = 3030;




app.listen(port, ()=> console.log('Server runnig in http://localhost:' + port));