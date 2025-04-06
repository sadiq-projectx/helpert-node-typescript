import {
  Strategy as JwtStrategy,
  ExtractJwt,
  StrategyOptions,
} from "passport-jwt";
import passport from "passport";
// import User from "../database/models/User";

const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET as string,
};

// passport.use(
//   new JwtStrategy(options, async (payload, done) => {
//     try {
//       const user = await User.findById(payload.id);
//       if (user) {
//         return done(null, user);
//       }
//       return done(null, false);
//     } catch (error) {
//       return done(error, false);
//     }
//   })
// );

export default passport;
