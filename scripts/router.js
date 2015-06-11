import IndexView from './views/index';
import PicpostView from './views/picpost';

import {UserCollection} from './models/user';
import {PicturesCollection} from './models/pictures';

var Router = Backbone.Router.extend({
	routes: {
		'': 'index',
		'picpost': 'picpost'
		'create': 'create'
	},
	
	initialize: function() {
		this.user = new UserCollection();
		this.listenTo(this.user, 'add', function() {
			this.navigate('picpost', {trigger: true});
		}.bind(this));
		
		this.pictures = new PicturesCollection();
	},
	
	index: function() {
		var view = new IndexView({collection: this.user});
		$('.appContainer').html(view.el);
	},
	
	picpost: function () {
		var view = new PicpostView({
			collection: this.pictures,
			user: this.user.at(0)
		});
		$('.appContainer').html(view.el);
		this.pictures.fetch();
	},
	
	create: function(){
		
	},
});

var router = new Router();

export default router;