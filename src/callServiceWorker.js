if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register(
        "http://" + window.location.host + "/sw.js"
      );
    });
  }