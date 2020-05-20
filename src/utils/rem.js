export default function resizeFontsize () {
	(function (win, doc) {
		function change () {
			doc.documentElement.style.fontSize = 16 * doc.documentElement.clientWidth / 375 + 'px'
		}
		change()
		win.addEventListener('resize', function () {
			change()
		}, false)
	})(window, document)
}
