import mongoose from 'mongoose'

const TodoSchema = new mongoose.Schema({
  item: String,
  completed: Boolean,
})

const Todo = mongoose.models.Todo || mongoose.model('Todo', TodoSchema)
export default Todo
