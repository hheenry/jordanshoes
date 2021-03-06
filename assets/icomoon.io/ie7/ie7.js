/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-alert-octagon': '&#xe900;',
		'icon-chevron-up': '&#xe901;',
		'icon-coffee': '&#xe903;',
		'icon-home': '&#xe904;',
		'icon-instagram1': '&#xe907;',
		'icon-lock': '&#xe90b;',
		'icon-log-in': '&#xe90c;',
		'icon-package': '&#xe905;',
		'icon-shopping-bag': '&#xe906;',
		'icon-shopping-cart': '&#xe908;',
		'icon-truck': '&#xe909;',
		'icon-user': '&#xe90a;',
		'icon-users': '&#xe90d;',
		'icon-github': '&#xe902;',
		'icon-credit-card': '&#xe93f;',
		'icon-share2': '&#xea82;',
		'icon-instagram': '&#xea92;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
