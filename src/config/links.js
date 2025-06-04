const basePhoneNumber = "7 800 555-49-13";
const baseTelegramHandle = "@LockServiceOmsk";

const utmParams = "utm_source=site&utm_medium=button&utm_campaign=ulyanovsk";

export const LINKS = {
  phone: {
    raw: basePhoneNumber,
    tel: `tel:+78005554913`,
  },
  telegram: {
    handle: baseTelegramHandle,
    url: "https://t.me/zamkovbot?start=ulyanovsk",
  },
  yandexMapId: "3A43eb009744df70e21c8be38437baead23bcfe9a8b7c30d2dc6ed2d2c364977d7",
  yandexMetricaId: "101686254",
  address: {
    full: "Ульяновск, ул. Гончарова, д. 16, офис 405",
    street: "ул. Гончарова, д. 16, офис 405",
    city: "Ульяновск",
    region: "Ульяновская область",
    postalCode: "432000"
  }
};
