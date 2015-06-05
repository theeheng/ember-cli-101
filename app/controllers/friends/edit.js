import FriendsBaseController from './base';

export default FriendsBaseController.extend({
	
	actions: {
		save: function() {
			console.log('+- save action in friends edit controller');
			this._super();
			
		},
		cancel: function() {
			console.log('+- cancel action in friends edit controller');
			this.transitionToRoute('friends.show', this.get('model'));
			return false;
		}
}
});
