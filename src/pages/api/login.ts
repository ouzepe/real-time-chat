import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  username: string;
};

export default function login(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log(req.body, "ici");
  res.status(200).json({ username: "Jtest" });
}
