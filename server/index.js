//initialize the backend and front end package
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
//Connect to frontend and backend using cors middleware
app.use(cors());
app.use(express.json());

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


    //post method
    app.post("/women", async (req, res) => {
      const data = req.body;
      const result = await womenCollection.insertOne(data);
      res.send(result);
    });
    app.post("/men", async (req, res) => {
      const data = req.body;
      const result = await menCollection.insertOne(data);
      res.send(result);
    });
    app.post("/kids", async (req, res) => {
      const data = req.body;
      const result = await kidsCollection.insertOne(data);
      res.send(result);
    });

    //get method
    app.get("/getwomen", async (req, res) => {
      const product = await womenCollection.find().toArray();
      res.send(product);
    });
    app.get("/women/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) }
      const result = await womenCollection.findOne(filter);
      res.send(result);
    });

    app.get("/getmen", async(req,res)=>{
      const product = await menCollection.find().toArray();
      res.send(product);
    })
    app.get("/men/:id", async(req,res)=>{
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const result = await menCollection.findOne(filter);
      res.send(result);
    });



    //patch method
    app.patch("/update/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) }
      const data = req.body;

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
    });

    app.patch("/menupdate/:id", async(req, res)=>{
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const data = req.body

      const updateData = {
        $set:{
          ...data
        }
      }

      const option = {upsert: true}
      const result = await menCollection.updateOne(
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

    app.delete("/menupdate/:id", async (req, res)=>{
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) }
      const result = await menCollection.deleteOne(filter);
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

