import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  username: string;
};

type ErrorResponse = {
  error: string;
};

export default function Login(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorResponse>
) {
  if (req.method === "POST") {
    const { username } = req.body;
    
    

  } else {
    const errorResponse: ErrorResponse = { error: "Méthode non autorisée" };
    res.status(405).json(errorResponse);
  }
}
