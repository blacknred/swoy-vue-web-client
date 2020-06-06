export default function offline(store) {
  function checkConnection() {
    // check connection with ping/pong request or ws

    if (store.state.isOffline) {
      store.dispatch("setOffline", false);
    }
  }

  window.addEventListener("online", checkConnection);
  window.addEventListener("offline", () => store.dispatch("setOffline", true));
}
