function fetchProducts(callback) {
	var products = {},
		images = ['speakers1', 'speakers2', 'speakers3'],
		i = 0,
		o,
		x,
		y;

	for (x = 0, y = 200; x < y; x++) {
		products['AS-' + ((x + 1) * 100)] = {
			id: x + 1,
			description: 'Duis magna nisi, dictum et aliquet et, tempor nec est. Quisque a pharetra justo. Aenean erat enim, porta vulputate pellentesque sit amet, ultrices vel enim.',
			price: parseFloat(Math.floor(Math.random() * 1001) + '.' + Math.floor(Math.random() * 99)),
			image: 'images/' + images[i] + '_small.jpg'
		};

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
			e.attr('id', data[p].id);

			var img = $('<img/>');
			img.attr('src', data[p].image);
			img.attr('alt', p);
			e.append(img);

			var s = $('<span>');
			s.addClass('name');
			s.html(p);
			e.append(s);

			var price = $('<span>');
			price.addClass('price');
			price.html('$ ' + data[p].price.toString().replace('.', ','));
			e.append(price);

			var add = $('<button>');
			add.html('Buy now');
			add.click(function () {
				alert('The item will be shipped to you over the next 2 working days.\n\nThanks for choosing our products.');
			});
			e.append(add);
			e.append(add);

			var d = $('<p>');
			d.addClass('description');
			d.html(data[p].description);
			e.append(d);

			u.append(e);

			if (window.location.hash) {
				var target = $(window.location.hash);

				if (target.length > 0) {
					$('html').scrollTop(target.offset().top);
				}
			}
		}
	});

	$('.products li').click(function(){
		$(this).toggleClass('open');
	})
});