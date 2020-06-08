if('serviceWorker' in navigator){
	navigator.serviceWorker.register('sw.js')
	   .then((reg) => console.log('service worker registerd'))
	   .catch((err) => console.log('service worker registerd'))
}