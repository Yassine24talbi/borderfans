const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const schemaEmailSub = require('./models/email');
const allproduct = require('./models/allproducts');
const shemaorder = require('./models/order');

// MongoDB connection string
const mongoURI = 'mongodb+srv://yassinetb222:26m4RqhZRJBVFTzD@freetry.7zqce.mongodb.net/?retryWrites=true&w=majority&appName=freeTry';
// Connect to MongoDB
mongoose.connect(mongoURI)
.then(() => {
    console.log('Connected to MongoDB');
}).catch((err) =>{
    console.log('error',err);
})

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS) from the "view" directory

app.use(express.static(path.join(__dirname, 'view')));

// ///////////////////////////
app.post('/',async (req,res) => {
  const emailabonne = new schemaEmailSub(req.body)
  await emailabonne.save()
  res.status(200).send({message:'Message sent'});
})
// ////////////////////////////
app.post('/store.html',async (req,res) => {
  const emailabonne = new schemaEmailSub(req.body)
  await emailabonne.save()
  res.status(200).send({message:'Message sent'});
})
// ////////////////////////////
app.post('/onproduct.html',async (req,res) => {
  const emailabonne = new schemaEmailSub(req.body)
  await emailabonne.save()
  res.status(200).send({message:'Message sent'});
})
// ////////////////////////////////
app.get('/api/allproduct', async (req, res) => {
  try {
    const products = await allproduct.find({ title: { $exists: true, $ne: null } });
    res.json(products); // Send the products as a JSON response
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});
// ////////////////////////////////
app.post('/api/allproduct', async (req, res) => {
  const sercheWord = req.body.searchWord
  try {
    products = await allproduct.find({ title: { $regex: sercheWord, $options: 'i' } });
    res.json(products); // Send the products as a JSON response
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});
//////////////////////////////////////////////
app.post('/add.html',async (req,res)=>{
  const add = new allproduct(req.body)
  await add.save()
})
/////////////////////////////////////////////////
app.post('/checkout.html',async (req,res) =>{
  const order = new shemaorder(req.body)
  await order.save()
})



// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


