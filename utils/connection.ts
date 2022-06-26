import mongoose, { Model } from "mongoose"
import Todo from "models/todo"

// CONNECTING TO MONGOOSE (Get Database Url from .env.local)
// const { DATABASE_URL } = process.env

export const connect = async () => {
    const conn = await mongoose
      .connect(process.env.DATABASE_URL as string)
      .then(() => console.log("Mongoose Connection Established"))
      .catch(err => console.log(err))
  
    return { conn, Todo }
  }

  