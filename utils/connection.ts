import mongoose from 'mongoose'

export const connect = async () => {
  const conn = await mongoose
    .connect(process.env.DATABASE_URL as string)
    .then(() => console.log('Mongoose Connection Established'))
    .catch((err) => console.log(err))

  return { conn }
}
