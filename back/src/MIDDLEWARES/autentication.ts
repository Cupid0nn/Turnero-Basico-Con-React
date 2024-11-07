import { Request, Response, NextFunction } from "express";

const autentication = (req: Request, res: Response, next: NextFunction) => {
    const token: string = req.headers["token"] as string;

    if (!token) {
        res.status(401).send({ message: "No estas autorizado" });
        return;
    }
    if (token !== "validToken") {
        res.status(401).send({ message: "Token Invalido🤓" });
        return;
    }

    next();
}

export default autentication;