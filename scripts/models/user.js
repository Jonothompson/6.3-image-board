var User = Backbone.Model.extend({
	defaults:{
		name: ''
	}
});

var UserCollection = Backbone.Colletion.extend({
	model: User
});

export default {User, UserCollection};