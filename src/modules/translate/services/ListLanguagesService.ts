import ILanguageDTO from '../dtos/ILanguageDTO';
import { Languages } from '../enums/LanguagesEnum';

class ListLanguagesService {
  public async execute(): Promise<ILanguageDTO[]> {
    const languages = Object.keys(Languages).map(code => ({
      code,
      name: Languages[code as 'auto'],
    }));
    return languages;
  }
}

export default ListLanguagesService;
