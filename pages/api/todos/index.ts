import { NextApiRequest, NextApiResponse } from 'next'
import { connect } from 'utils/connection'
import { ResponseFuncs } from 'utils/types'
import Todo from 'models/todo'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  //capture request method, we type it as a key of ResponseFunc to reduce typing later
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs

  //function for catch errors
  const catcher = (error: Error) => res.status(400).json({ error })

  // Potential Responses
  const handleCase: ResponseFuncs = {
    // RESPONSE FOR GET REQUESTS
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      try {
        await connect() // connect to database
        res.json(await Todo.find())
      } catch (err) {
        catcher(err)
      }
    },
    // RESPONSE POST REQUESTS
    // POST 요청 주체가 admin 인지 검사 한 후 아래 api 를 추가하자.
    // POST: async (req: NextApiRequest, res: NextApiResponse) => {
    //   const { Todo } = await connect() // connect to database
    //   res.json(await Todo.create(req.body).catch(catcher))
    // },
  }

  // Check if there is a response for the particular method, if so invoke it, if not response with an error
  const response = handleCase[method]
  if (response) {
    return response(req, res)
  } else res.status(400).json({ error: 'No Response for This Request' })
}

export default handler
