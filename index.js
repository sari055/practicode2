import express from 'express'
import { createRequire } from 'module';

const app=express()
const port=3000
const require = createRequire(import.meta.url);
const sdk = require('api')('@render-api/v1.0#5yi85d37lhqedd36');

sdk.auth('rnd_3ZWSYqtbcW0POVXk4KSl7GPdVvli');
sdk.getServices()
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));

app.get('/',(req,res)=>{res.send('hello world!')})

app.listen(port,()=>{
    console.log(`node.js working!`)
})
