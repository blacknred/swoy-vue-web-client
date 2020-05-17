export default function createWebSocketPlugin(socket) {
  let tm;

  function ping() {
    socket.send("__ping__");

    tm = setTimeout(function() {
      // connection closed
      // store.commit("setOffline", true);
    }, 5000);
  }

  function pong() {
    clearTimeout(tm);
  }

  return store => {
    socket.onopen = function() {
      setInterval(ping, 30000);
    };

    socket.on("data", data => {
      if (data === "__pong__") {
        pong();

        return;
      }

      // store.commit("receiveData", data);
    });

    store.subscribe(mutation => {
      if (mutation.type === "UPDATE_DATA") {
        socket.emit("update", mutation.payload);
      }
    });
  };
}

// const myPluginWithSnapshot = (store) => {
//   let prevState = _.cloneDeep(store.state);
//   store.subscribe((mutation, state) => {
//     let nextState = _.cloneDeep(state);

//     // compare `prevState` and `nextState`...

//     // save state for next mutation
//     prevState = nextState;
//   });
// };
