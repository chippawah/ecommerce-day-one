module.exports = {
	getCustomer: function(req, res) {
		///api/customers/:id
		Customer.findOne({_id: req.params.id}).exec().then(function(err, user) {
			return res.json(user);
		});
	},
	getCustomers: function(req, res) {
		var sort = req.query.sort || '-createdAt';
		var skip = req.query.skip || 0;
		var limit = Number(req.query.limit) || 100;
		if (limit > 1000) {
			limit = 1000;
		}
		///api/customers
		Customer
			.find()
			.limit(limit)
			.skip(skip)
			.sort(sort)
			.select('name email address') //optional
			.exec().then(function(err, users) {
				return res.json(users);
			});
	}
}