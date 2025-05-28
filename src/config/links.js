const basePhoneNumber = "+78005553535";
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
};
