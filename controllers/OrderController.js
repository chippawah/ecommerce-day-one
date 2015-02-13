module.exports = {
	getOrder: function(req, res) {
		///api/orders/:id
		Order.findOne({_id: req.params.id})
			.exec()
			.populate('customer')
			.then(function(err, order) {
				console.log(order);
				//before...
				// {
				// 	items: [...],
				// 	customer: 'ANsdfjxkjf@$@',
				// 	status: 'active'
				// 	[...]
				// }

				//after...
				// {
				// 	items: [...],
				// 	customer: {
				//		_id: 'ANsdfjxkjf@$@'
				//		name: 'blah blah',
				//		email: 'example@example.com'
				//  },
				// 	status: 'active'
				// 	[...]
				// }


				//Customer.findOne({_id: order.customer}).exec().then()
				return res.json(order);
		});
	}
}