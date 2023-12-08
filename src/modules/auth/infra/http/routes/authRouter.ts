import { Router } from 'express'

import GoogleSignInFactory from './factories/auth/GoogleSignInFactory'
import LinkedinSignInFactory from './factories/auth/LinkedinSignInFactory'
import LinkedinSignInCallBackFactory from './factories/auth/LinkedinSignInCallBackFactory'


const authRouter = Router({ mergeParams: true })

authRouter.post('/login/google',
async(req, res) => await GoogleSignInFactory.handle(req, res))
authRouter.get('/login/linkedin',async(req, res) => await LinkedinSignInFactory.handle(req, res))
authRouter.get('/linkedin/redirect', async(req, res) => await LinkedinSignInCallBackFactory.handle(req, res))

export { authRouter }