if ("serviceWorker" in navigator) {
  if (navigator.serviceWorker.controller) {
	console.log("[PWA Builder] active service worker found, no need to register");
} else {
	navigator.serviceWorker
	  .register("sw.js", {
		scope: "./"
	  })
	  .then(function (reg) {
		console.log("[PWA Builder] Service worker has been registered for scope: " + reg.scope);
	});
  }
}

let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
	document.getElementById('downNoti').removeAttribute("style")
	deferredPrompt = e;
});
function installApp() {
	if (deferredPrompt !== null) {
		deferredPrompt.prompt();
		const { outcome } = deferredPrompt.userChoice;
		if (outcome === 'accepted') {
			deferredPrompt = null;
		}
	}
}