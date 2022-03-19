import { Request, Response } from 'express';

import TranslateTextService from '../../../services/TranslateTextService';

export default class TranslateTextController {
  public async translate(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { text, from, to } = request.body;

    const service = new TranslateTextService();

    const translatedText = await service.execute({
      text,
      languages: { from, to },
    });

    return response.json(translatedText);
  }
}
