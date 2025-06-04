import Observer from 'fontfaceobserver';

export const loadFonts = async () => {
  try {
    const montserrat400 = new Observer('Montserrat', { weight: 400 });
    const montserrat500 = new Observer('Montserrat', { weight: 500 });
    const montserrat700 = new Observer('Montserrat', { weight: 700 });

    const nunito400 = new Observer('Nunito', { weight: 400 });
    const nunito600 = new Observer('Nunito', { weight: 600 });
    const nunito700 = new Observer('Nunito', { weight: 700 });

    const timeout = 10000;

    await Promise.all([
      montserrat400.load(null, timeout),
      montserrat500.load(null, timeout),
      montserrat700.load(null, timeout),
      nunito400.load(null, timeout),
      nunito600.load(null, timeout),
      nunito700.load(null, timeout)
    ]);

    document.documentElement.classList.add('montserrat-loaded');
    document.documentElement.classList.add('nunito-loaded');

    console.log('Все шрифты успешно загружены');

  } catch (error) {
    console.error('Ошибка загрузки шрифтов:', error);
  }
}; 