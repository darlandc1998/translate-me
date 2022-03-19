import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import TranslateTextController from '../controllers/TranslateTextController';

const translateRouter = Router();
const translateTextController = new TranslateTextController();

translateRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      text: Joi.string().required(),
      from: Joi.string(),
      to: Joi.string().required(),
    },
  }),
  translateTextController.translate,
);

export default translateRouter;
