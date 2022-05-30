// Basic Print Each Doc 
    const cursor = locations.find({});
    await cursor.forEach(doc => console.log(doc));

// Function to add an entry to the DB
    async function createListing(client, newLocation){
    const result = await client.db("GoogleMaps").collection("locations").insertOne(newLocation);
    console.log(`New location created with the following id: ${result.insertedId}`);
    }
    // Calling the add function
    await createListing(client,
    {
        title: "South Fremantle Football Club",
        lat: -32.0566589,
        lng: 115.7483453,
    });