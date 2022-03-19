import { translate, Translate } from 'free-translate';

interface IRequest {
  text: string;
  languages: Translate;
}

class TranslateTextService {
  public async execute({ text, languages }: IRequest): Promise<string> {
    const translatedText = await translate(text, {
      from: languages.from,
      to: languages.to,
    });
    return translatedText;
  }
}

export default TranslateTextService;
