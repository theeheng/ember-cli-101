import FriendsBaseController from './base';

export default FriendsBaseController.extend({
	
	actions: {
		save: function() {
			console.log('+- save action in friends new controller');
			this._super();
			
		},
		cancel: function() {
			console.log('+- cancel action in friends new controller');
			this.transitionToRoute('friends.index');
			return false;
		}
}
});

