import mongoose, { Model } from 'mongoose'

// CONNECTING TO MONGOOSE (Get Database Url from .env.local)

export const connect = async () => {
  const conn = await mongoose
    .connect(process.env.DATABASE_URL as string)
    .then(() => console.log('Mongoose Connection Established'))
    .catch((err) => console.log(err))

  const FailSchema = new mongoose.Schema({
    summary: String,
    occurrenceTime: Date,
    resolvedTime: Date,
    timeLine: String,
    failureReason: String,
    damage: String,
    resolveSolution: String,
    preventionSolution: String,
    lesson: String,
  })

  const Fail = mongoose.models.Fail || mongoose.model('Fail', FailSchema)

  return { conn, Fail }
}
