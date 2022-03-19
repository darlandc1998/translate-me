import TranslateTextService from './TranslateTextService';

let translateTextService: TranslateTextService;

describe('TranslateText', () => {
  beforeEach(() => {
    translateTextService = new TranslateTextService();
  });

  it('Should be able translate text setting from', async () => {
    const translatedText = await translateTextService.execute({
      text: 'carro',
      languages: { from: 'pt-BR', to: 'en' },
    });

    expect(translatedText).toBe('car');
  });

  it('Should be able translate text without from', async () => {
    const translatedText = await translateTextService.execute({
      text: 'código',
      languages: { to: 'en' },
    });

    expect(translatedText).toBe('code');
  });
});
