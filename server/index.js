//initialize the backend and front end package
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const multer = require('multer');
const path = require('path');

//Connect to frontend and backend using cors middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()} - ${file.originalname}`);
  }
});

// Multer instance
const upload = multer({ storage });


app.get('/', (req, res) => {
  res.send('Hello world');
})


const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = "mongodb+srv://krishnank281099:KrishnanK281099@cluster0.bazktvx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const womenCollection = client.db("pantaloonsclone").collection("women_collections");
    const menCollection = client.db("pantaloonsclone").collection("men_collections");
    const kidsCollection = client.db("pantaloonsclone").collection("kids_collections");
    const trendingCollection = client.db("pantaloonsclone").collection("trending_collections");
    const bestsellerCollection = client.db("pantaloonsclone").collection("bestseller_collections");
    //post method
    // app.post("/women", async (req, res) => {
    //   const data = req.body;
    //   const result = await womenCollection.insertOne(data);
    //   res.send(result);
    // });

    app.post("/men", upload.single('img'), async (req, res) => {
      try{
        const {productTitle, productPrice,productImg,productDesc,quantity} = req.body
        const imgPath = req.file ? `/uploads/${req.file.filename}` : productImg
        const productObject ={
          productTitle,
          productPrice,
          productImg: imgPath,
          productDesc,
          quantity
        }
        const result = await menCollection.insertOne(productObject)
        res.send(result);
      }
      catch(error){
        res.send(500).send({message: 'Error adding product'})
      }
    });
    //end pointing for upload image
    app.post('upload/img', upload.single('image'), async(req,res) =>{
      if(!req.file){
        return res.status(400).send('No file uploaded')
      }
      const imageUrl = `uploads/${req.file.filename}`
      res.send(imageUrl);
    })
 


    app.post('/women', upload.single('img'), async(req,res)=>{
      try{
        const {productTitle,productPrice,comparePrice,productImg,productDesc,quantity} = req.body;
        const imgPath = req.file ? `/uploads/${req.file.filename}`: productImg
        
        const productObject = {
          productTitle,
          productPrice,
          comparePrice,
          productImg: imgPath,
          productDesc,
          quantity
        };
        const result = await womenCollection.insertOne(productObject);
        res.send(result)
      }
      catch(error){
        res.status(500).send({message: 'Error aadding product'});
      }
    })
    //end pointing for upload image
    app.post('/upload-image', upload.single('image'), async(req,res)=>{
      if(!req.file){
        return res.status(400).send('No file uploaded')
      }
      const imageUrl = `/uploads/${req.file.filename}`
      res.send({imageUrl});
    })

    app.post("/kids", async (req, res) => {
      const data = req.body;
      const result = await kidsCollection.insertOne(data);
      res.send(result);
    });

    app.post("/trending", async(req, res) =>{
      const data = req.body;
      const result = await trendingCollection.insertOne(data);
      res.send(result);
    })
    app.post("/bestseller", async(req, res) =>{
      const data = req.body
      const result = await bestsellerCollection.insertOne(data)
      res.send(result);
    })
    //get method
    app.get("/getwomen", async (req, res) => {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 5;

      const pageSkip = (page - 1) * limit;
      const total = await womenCollection.countDocuments();
      const totalPage = Math.ceil(total / limit);
      const product = await womenCollection.find().skip(pageSkip).limit(limit).toArray();
      res.json({
        product,
        totalPage,
        currentPage: page
      });
    });
    // app.get("/allproducts", async(req, res)=>{
    //   const page = parseInt(req.query.page) || 1;
    //   const limit = parseInt(req.query.limit) || 5;

    //   const pageSkip = (page - 1) * limit;
    //   const total = await womenCollection.countDocuments();
    //   const totalPage = Math.ceil(total / limit);
    //   const foods = await womenCollection.find().skip(pageSkip).limit(limit).toArray();
    //   res.json({
    //     foods,
    //     totalPage,
    //     currentPage: page
    //   });
    // });
    app.get("/women/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) }
      const result = await womenCollection.findOne(filter);
      res.send(result);
    });

    app.get("/getmen", async (req, res) => {
      const product = await menCollection.find().toArray();
      res.send(product);
    })
    app.get("/men/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) }
      const result = await menCollection.findOne(filter);
      res.send(result);
    });

    app.get("/getkids", async (req, res) => {
      const product = await kidsCollection.find().toArray();
      res.send(product);
    });
    app.get("/kids/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) }
      const result = await kidsCollection.findOne(filter)
      res.send(result);
    });

    app.get("/gettrending", async(req,res)=>{
      const product = await trendingCollection.find().toArray();
      res.send(product);
    });

    app.get("/trending/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) }
      const result = await trendingCollection.findOne(filter)
      res.send(result);
    });
    app.get("/getbestseller", async(req,res)=>{
      const product = await bestsellerCollection.find().toArray();
      res.send(product);
    });
    app.get("/bestseller/:id", async(req,res)=>{
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const result = await bestsellerCollection.findOne(filter)
      res.send(result)
    });
    //patch method
    app.patch("/update/:id", upload.single('img'), async (req, res) => {
      try{
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) }
        const data = req.body;

        if(req.file){
          data.productImg = `/uploads/${req.file.filename}`;
        }
      //update metod db
        const updateData = {
          $set: {
            ...data
          }
        }

        const option = { upsert: true }
        const result = await womenCollection.updateOne(
          filter,
          updateData,
          option
        )
        res.send(result);
      }
      catch(error){
        console.error(error);
        res.status(500).send({message: 'Error aadding food'});
      }
      
    });

    
    app.patch("/menupdate/:id", upload.single('img'), async (req, res) => {
      try{
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) }
      const data = req.body

      if(req.file){
        data.productImg = `/uploads/${req.file.filename}`;
      }
      const updateData = {
        $set: {
          ...data
        }
      }

      const option = { upsert: true }
      const result = await menCollection.updateOne(
        filter,
        updateData,
        option
      )
      res.send(result);
    }
    catch(error){
      console.error(error);
      res.status(500).send({message: 'Error aadding food'});
    }
    });

    app.patch("/kidsupdate/:id", async (req, res) => {
      const id = req.params.id
      const filter = { _id: new ObjectId(id) }
      const data = req.body

      const updateData = {
        $set: {
          ...data
        }
      }
      const option = { upsert: true }
      const result = await kidsCollection.updateOne(
        filter,
        updateData,
        option
      )
      res.send(result);
    })

    app.patch("/trendingupdate/:id", async(req,res)=>{
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) }
      const data = req.body

      const updateData = {
        $set:{
          ...data
        }
      }
      const option = {upsert: true}
      const result = await trendingCollection.updateOne(
        filter,
        updateData,
        option
      )
      res.send(result)
    });
    app.patch("bestsellerupdate/:id", async(req, res)=>{
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const data = req.body

      const updateData = {
        $set:{
          ...data
        }
      }
      const option = {upsert: true}
      const result = await bestsellerCollection.updateOne(
        filter,
        updateData,
        option
      )
      res.send(result);
    })
    //delete method
    app.delete("/update/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) }
      const result = await womenCollection.deleteOne(filter);
      res.send(result);
    });

    app.delete("/menupdate/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) }
      const result = await menCollection.deleteOne(filter);
      res.send(result);
    })

    app.delete("/kidsupdate/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) }
      const result = await kidsCollection.deleteOne(filter);
      res.send(result);
    })

    app.delete("/trendingupdate/:id", async(req,res)=>{
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) }
      const result = await trendingCollection.deleteOne(filter)
      res.send(result);
      
    })
    app.delete("/bestsellerupdate/:id", async(req, res)=>{
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const result = await bestsellerCollection.deleteOne(filter)
      res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);





app.listen(port, () => {
  console.log(`listing on port ${port}`);
})

