import { MongoClient } from "mongodb";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { title, image, address, description } = data;
    const client = await MongoClient.connect(
      "mongodb+srv://test:test123@cluster0.idwo4.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupCollections = db.collection("meetups");
    const result = await meetupCollections.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "Meetup inserted" });
  }
}
