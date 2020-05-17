import _workspaces from "./workspaces.json";

/**
 * Mocking client-server processing
 */

export const workspaces = {
  getWorkspaces() {
    return new Promise(resolve =>
      setTimeout(() => {
        return resolve(_workspaces);
      }, 3000)
    );
  },
  sendAuthConfirmationCode() {
    return new Promise(resolve =>
      setTimeout(() => {
        return resolve({ code: 476786 });
      }, 1500)
    );
  }
  // buyProducts(products, cb, errorCb) {
  //   setTimeout(() => {
  //     // simulate random checkout failure.
  //     Math.random() > 0.5 || navigator.webdriver ? cb() : errorCb();
  //   }, 100);
  // },
};

export const messages = {};

export const wss_conn = new WebSocket("ws://192.168.0.5:3000");
