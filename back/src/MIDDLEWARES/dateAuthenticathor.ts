
import { Request, Response, NextFunction } from 'express';

export const dateFormatter = (req: Request, res: Response, next: NextFunction) => {
  if (req.body.date) {
    try {
      const date = new Date(req.body.date);

      // Verifica si la fecha es de lunes a viernes
      const dayOfWeek = date.getUTCDay();
      if (dayOfWeek === 0 || dayOfWeek === 6) { // 0 es domingo y 6 es sábado
        return res.status(400).send({ error: 'Date must be between Monday and Friday' });
      }

      // Formatea la fecha como MM-DD
      const formattedDate = `${date.getMonth() + 1}-${date.getDate()}`;
      req.body.date = formattedDate;
    } catch (error) {
      return res.status(400).send({ error: 'Invalid date format' });
    }
  }
  next();
};
