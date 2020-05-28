import dayjs from "dayjs";
import i18n from "@/plugins/i18n";

export default async function restoration(store) {
  await store.restored;

  // language
  i18n.locale = store.state.settings.language;
  dayjs.locale(store.state.settings.language);
}
