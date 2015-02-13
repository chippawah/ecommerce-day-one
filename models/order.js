var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Product = require('./product');

var schema = new Schema({
	items: [Product],
	customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
	status: { type: String, enum: ['active', 'shipped', 'in transit'] },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', schema);