import getPrismaInstance from "../utils/PrismaClient.js";

export const checkUser = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.json({ msg: "Email is required", status: false });
    }
    const prisma = getPrismaInstance();
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.json({ msg: "User I required", status: false });
    } else {
      return res.json({ msg: "User Not required", status: true, data: user });
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};
