import { MongoClient } from "mongodb"

const client= new MongoClient("mongodb://admin:password@localhost:27017")

export const db = client.db("testdb")