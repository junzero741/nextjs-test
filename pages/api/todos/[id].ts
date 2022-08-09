import { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../../utils/connection'
import { ResponseFuncs } from '../../../utils/types'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs
  const catcher = (error: Error) => res.status(400).json({ error })
  const id: string = req.query.id as string

  const handleCase: ResponseFuncs = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      const v = await connect()
    },
    PUT: async (req: NextApiRequest, res: NextApiResponse) => {
      const v = await connect()
    },
    DELETE: async (req: NextApiRequest, res: NextApiResponse) => {
      const v = await connect()
    },
  }

  const response = handleCase[method]
  if (response) response(req, res)
  else res.status(400).json({ error: 'No Response for This Request' })
}

export default handler
