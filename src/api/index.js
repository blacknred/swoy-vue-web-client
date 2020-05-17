import _workspaces from "./workspaces.json";

const TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6ImMxNTMwMjY3LTFiNzctNDEyNC05NWNlLTQzOWFjZTcyOTkwOSIsImlhdCI6MTU4OTczMDU5NCwiZXhwIjoxNTg5NzM0MTk0fQ.qQwRR0Oh8w_C-Ie0hUwHrkqa8zqbttosej_gxPyOc9s";
function delay(ms = 1000) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Mocking client-server processing
 */

export const workspaces = {
  async getAllWorkspaces() {
    await delay(3000);
    return _workspaces;
  },
  async sendAuthConfirmationCode(email) {
    await delay(1500);
    console.log(email);
    return { code: 476786 };
  },
  async getAuthTokens(email) {
    await delay(1500);
    console.log(email);
    return {
      token: TOKEN,
      refreshToken: new Date().getTime()
    };
  },
  async getUserWorkspaces() {
    await delay(5000);
    return Math.random() > 0.5 || navigator.webdriver
      ? new Error("500")
      : _workspaces;
  },
  async createWorkspace(data) {
    await delay(2000);
    console.log(data);
    return { id: new Date().getTime() };
  }
};

export const messages = {};

export const wss_conn = new WebSocket(`wss://api2`);
