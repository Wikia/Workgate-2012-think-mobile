function fetchProducts(callback) {
	var products = {},
		images = ['speakers1', 'speakers2', 'speakers3'],
		i = 0,
		o,
		x,
		y;

	for (x = 0, y = 200; x < y; x++) {
		o = {};
		o['id'] = x + 1;
		o['description'] = 'Duis magna nisi, dictum et aliquet et, tempor nec est. Quisque a pharetra justo. Aenean erat enim, porta vulputate pellentesque sit amet, ultrices vel enim.';
		o['price'] = parseFloat( Math.floor(Math.random() * 1001) + '.' + Math.floor(Math.random() * 99) );
		o['image'] = 'images/' + images[i] + '.jpg?' + Math.floor(Math.random() * 1000000001);

		products['AS-' + (x * 100)] = $.extend({}, o);

		if (i === 2) {
			i = 0;
		} else {
			i++;
		}
	}

	if (callback instanceof Function) {
		callback(products);
	}
}

$(function () {
	fetchProducts(function (data) {
		var u = $('.products');

		for (var p in data) {
			var e = $('<li>');
			u.append(e);
			e.attr('id', data[p].id);

			var img = $('<img/>');
			e.append(img);
			img.attr('src', data[p].image);
			img.attr('alt', p);

			var s = $('<span>');
			e.append(s);
			s.addClass('name');
			s.html(p);

			var d = $('<p>');
			d.addClass('description');
			d.html(data[p].description);
			e.append(d);

			var price = $('<span>');
			price.addClass('price');
			price.html('$ ' + data[p].price.toString().replace('.', ','));
			e.append(price);

			if (window.location.hash) {
				var target = $(window.location.hash);

				if (target.length > 0) {
					$('html').scrollTop(target.offset().top);
				}
			}
		}
	});
});