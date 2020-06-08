import _workspaces from "./workspaces.json";

const LATENCY = 1500;
const TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6ImMxNTMwMjY3LTFiNzctNDEyNC05NWNlLTQzOWFjZTcyOTkwOSIsImlhdCI6MTU4OTczMDU5NCwiZXhwIjoxNTg5NzM0MTk0fQ.qQwRR0Oh8w_C-Ie0hUwHrkqa8zqbttosej_gxPyOc9s";
const delay = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Mocking client-server processing
 */

export const workspaces = {
  async getAllWorkspaces({ page, search, isPublic }) {
    await delay(LATENCY * 2);
    console.log(page, search, isPublic);
    return _workspaces
      .filter(
        (w) =>
          (!search || w.name.includes(search)) &&
          (!isPublic || w.isPublic == isPublic)
      )
      .slice(page * 5, 5);
  },
  async sendAuthConfirmationCode(email) {
    await delay(LATENCY);
    console.log(email);
    return { code: 444444 };
  },
  async getAuthTokens(email) {
    await delay(LATENCY);
    console.log(email);
    return {
      token: TOKEN,
      refreshToken: TOKEN
    };
  },
  async getUserWorkspaces() {
    await delay(LATENCY * 3);
    return Math.random() > 0.5 || navigator.webdriver
      ? new Error("500")
      : _workspaces;
  },
  async createWorkspace(data) {
    await delay(LATENCY);
    console.log(data);
    return { id: new Date().getTime() };
  }
};

export const messages = {};

export const wss_conn = new WebSocket(`wss://api2`);
