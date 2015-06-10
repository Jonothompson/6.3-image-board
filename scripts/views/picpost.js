export default Backbone.View.extend({
	template: JST.chat,
	
	events: {
		'submit .create-post-form': 'createPost'
	},
	
	initialize: function(credintials){
		this.username = credintials.user ? credintials.user.get('username') : '';
		this.render();
		this.listenTo(this.collection, 'update', this.render);
	},
	
	
});