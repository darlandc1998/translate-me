import { Router } from 'express';

import ListLanguagesController from '../controllers/ListLanguagesController';

const languagesRouter = Router();
const listLanguagesController = new ListLanguagesController();

languagesRouter.get('/', listLanguagesController.index);

export default languagesRouter;
