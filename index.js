
const { MongoClient, ServerApiVersion } = require('mongodb');
const fs = require('fs');

const credentials = 'creds/X509-cert-6882253278456015760.cer'

const client = new MongoClient('mongodb+srv://cluster0.chi5q.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority', {
  sslKey: credentials,
  sslCert: credentials,
  serverApi: ServerApiVersion.v1
});

async function run() {
  try {
    await client.connect();

    const database = client.db('GoogleMaps');
    const locations = database.collection('locations');

    // code here
    const cursor = locations.find({});
    await cursor.forEach(doc => console.log(doc));
    
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);