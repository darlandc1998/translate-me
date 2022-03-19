import { Request, Response } from 'express';

import ListLanguagesService from '../../../services/ListLanguagesService';

export default class ListLanguagesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const service = new ListLanguagesService();

    const languages = await service.execute();

    return response.json(languages);
  }
}
