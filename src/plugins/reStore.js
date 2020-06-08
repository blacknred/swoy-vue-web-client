import dayjs from "dayjs";
import i18n from "@/plugins/i18n";

/** Entry point for store restoration */

export default async function restoration(store) {
  await store.restored;

  // locales
  const { language } = store.state.settings;
  i18n.locale = language;
  dayjs.locale(language);
  // axios.defaults.headers.common['Accept-Language'] = language
  document.querySelector("html").setAttribute("lang", language);
}
