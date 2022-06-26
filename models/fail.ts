import mongoose from 'mongoose'

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

export default Fail
