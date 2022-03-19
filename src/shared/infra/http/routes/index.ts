import { Router } from 'express';

import translateRouter from '../../../../modules/translate/infra/http/routes/translate.routes';
import languagesRouter from '../../../../modules/translate/infra/http/routes/languages.routes';

const routes = Router();

routes.use('/translate', translateRouter);
routes.use('/languages', languagesRouter);

export default routes;
