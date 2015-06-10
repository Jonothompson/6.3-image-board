var Pictures = Backbone.Model.extend({
	idAttribute: '_id',
	defaults: function () {
		return {
			content: '',
			username: '',
			created_at: new Date()
		};
	}
});

var PicturesCollection = Backbone.Collection.extend({
	model: Pictures,
	url: 'http://tiny-lasagna-server.herokuapp.com/collections/pictures'
});

export default {Pictures, PicturesCollection};