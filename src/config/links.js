const basePhoneNumber = "+79937898233";
const baseTelegramHandle = "@LockServiceNovosibirsk";

// Можно добавить UTM-метки как параметры
const utmParams = "utm_source=site&utm_medium=button&utm_campaign=cta";

export const LINKS = {
  phone: {
    raw: basePhoneNumber,
    tel: `tel:${basePhoneNumber}`,
    whatsapp: `https://wa.me/${basePhoneNumber.replace('+', '')}?text=Здравствуйте!`,
  },
  telegram: {
    handle: baseTelegramHandle,
    url: `https://t.me/muhyrlagod`,
  },
  mapId: "3Ab3c64f9ed7c443066bcbd40a4845ff63e69fe683ea34e6494e993264ec3ced00",
};
