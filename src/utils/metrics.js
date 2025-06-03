// Функция для отправки событий в Яндекс.Метрику
export const trackEvent = (eventName, params = {}) => {
  if (window.ym) {
    console.log('Sending event to Yandex.Metrica:', eventName, params); // Отладочный вывод
    window.ym(101686254, 'reachGoal', eventName, params);
  } else {
    console.warn('Yandex.Metrica not initialized');
  }
};

// Функция для отслеживания кликов по кнопкам
export const trackButtonClick = (buttonText, buttonType, href = null, section = null) => {
  trackEvent('button_click', {
    button_text: buttonText,
    button_type: buttonType,
    button_href: href,
    section: section
  });
}; 