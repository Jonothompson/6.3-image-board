export default Backbone.View.extend({
	template: JST.picboard,
	
	events: {
		'submit .create-post-form': 'createPost'
	},
	
	initialize: function(credintials){
		this.username = credintials.user ? credintials.user.get('username') : '';
		this.render();
		this.listenTo(this.collection, 'update', this.render);
	},
	
	render: function(){
		this.$el.html(this.template(this.collection.toJSON()));	
	},
	
	createPost: function(e) {
		e.preventDefault();
		var content = this.$('.create-post-content').val();
		this.collection.create({
			content: content,
			username: this.username
		});
	}
	
});