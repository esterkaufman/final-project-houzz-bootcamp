import "dotenv/config";
import { expressjwt } from "express-jwt";




function authorize(roles){
   if (typeof roles === 'string')  roles = [roles]
  const secret =   process.env.SECRET
  return  [expressjwt({
        secret , algorithms: ['HS256']
        }),
      (req, res, next) => {
        if (roles && !roles.includes(req.auth.role))
            return res.status(401).json({ message: "Unauthorized" });
      next()
      }]
}
export { authorize};
