import dayjs from "dayjs";
import i18n from "@/plugins/i18n";

/** Entry point for store restoration */

export default async function restoration(store) {
  await store.restored;

  // locales
  i18n.locale = store.state.settings.language;
  dayjs.locale(store.state.settings.language);
}
