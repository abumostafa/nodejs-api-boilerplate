import passport from "passport"
import { Strategy } from "passport-http-bearer"
import { AccessToken } from "../model/access-token"

passport.use(
  new Strategy(async (accessToken: string, done: Function) => {
    try {
      const token = await AccessToken.findOne({ where: { accessToken } })

      if (!token) return done(null, false)

      const user = await token.getUser()

      if (!user) return done(null, false)

      done(null, user)
    } catch (err) {
      done(err)
    }
  })
)

passport.initialize()

passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((token, done) => done(null, { token }))

export const auth = passport
