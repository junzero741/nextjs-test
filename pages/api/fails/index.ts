import { NextApiRequest, NextApiResponse } from 'next'
import { connect } from 'utils/connection'
import { ResponseFuncs } from '../../../utils/types'
import Fail from 'models/fail'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs
  const catcher = (error: Error | unknown) => res.status(400).json({ error })

  const handleCase: ResponseFuncs = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      try {
        await connect() // connect to database
        res.json(await Fail.find())
      } catch (err: unknown) {
        catcher(err)
      }
    },
  }

  const response = handleCase[method]
  if (response) {
    return response(req, res)
  } else res.status(400).json({ error: 'No Response for This Request' })
}

export default handler
