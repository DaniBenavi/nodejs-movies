import type { VercelRequest, VercelResponse } from '@vercel/node'
import { readJSON } from '../utils'

const moviesJs = readJSON('../movies.json')
// export default function handler(req: VercelRequest, res: VercelResponse) {
//   const { name = 'World' } = req.query
//   return res.json({
//     message: `Hello ${name}!`
//   })
// }
export default function handler(req: VercelRequest, res: VercelResponse) {
  const { movies = moviesJs } = req.query

  return res.json(movies)
}
