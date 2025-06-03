const basePhoneNumber = "+79999999999";
const baseTelegramHandle = "@LockServiceOmsk";

// UTM-метки для Омска
const utmParams = "utm_source=site&utm_medium=button&utm_campaign=omsk";

export const LINKS = {
  phone: {
    raw: basePhoneNumber,
    tel: `tel:${basePhoneNumber}`,
    whatsapp: `https://wa.me/${basePhoneNumber.replace('+', '')}?text=Здравствуйте!`,
  },
  telegram: {
    handle: baseTelegramHandle,
    url: "https://t.me/zamkovbot?start=omsk",
  },
  yandexMapId: "3Ab3c64f9ed7c443066bcbd40a4845ff63e69fe683ea34e6494e993264ec3ced00",
  yandexMetricaId: "101686254",
};
