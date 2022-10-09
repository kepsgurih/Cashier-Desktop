import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../libs/Config";

export default withIronSessionApiRoute(loginRoute, ironOptions);

async function loginRoute(req, res) {
  // get user from database then:
  req.session.user = {
    id: 230,
    admin: true,
  };
  await req.session.save();
  res.send({ ok: true });
}