import ListLanguagesService from './ListLanguagesService';

let listLanguagesService: ListLanguagesService;

describe('ListLanguage', () => {
  beforeEach(() => {
    listLanguagesService = new ListLanguagesService();
  });

  it('Shoud be able list all languages', async () => {
    const languages = await listLanguagesService.execute();
    expect(languages.length).toBeGreaterThan(1);
    expect(languages).toEqual(
      expect.arrayContaining([expect.objectContaining({ code: 'auto' })]),
    );
  });
});
