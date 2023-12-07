import { Router } from 'express'
import LinkedIn from'passport-linkedin-oauth2'
import Passport from 'passport'

const LinkedInStrategy = LinkedIn.Strategy

import GoogleSignInFactory from './factories/auth/GoogleSignInFactory'
import LinkedinSignInFactory from './factories/auth/LinkedinSignInFactory'


const authRouter = Router({ mergeParams: true })

authRouter.post('/login/google',
async(req, res) => await GoogleSignInFactory.handle(req, res))

authRouter.use(Passport.initialize())

Passport.serializeUser((user, done) => {
  done(null, user);
});

Passport.deserializeUser((user:any, done) => {
  done(null, user);
});

Passport.use(new LinkedInStrategy({
  clientID: "77fnj0n7gvw7c0",
  clientSecret: "iUUQjPsnM6OsZ724",
  callbackURL: "https://mirantes.io/",
  scope: ['email', 'profile'],
}, function(accessToken, refreshToken, profile, done) {
  console.log("profile",profile)
  process.nextTick(function () {
    return done(null, profile);
  });
}));

authRouter.get('/linkedin', Passport.authenticate('linkedin',
 { 
  state:'some-state-string',
  successRedirect:"/auth/login/linkedin/success"
}),
async(req, res) => {
  await LinkedinSignInFactory.handle(req, res)
});

authRouter.get('/auth/login/linkedin/success',(req, res)=>{
  console.log(req, res)
})

export { authRouter }