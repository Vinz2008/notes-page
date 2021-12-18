if('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('/notes-page/sw.js')
             .then(function() { console.log("Service Worker Registered"); });
  }