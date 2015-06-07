import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.createRecord('friend');

	},
	activate: function() {
	console.log('----- activate hook called -----');
	},
	deactivate: function() {
	    console.log('----- deactivate hook called -----');
	  },
  // actions omitted for clarity

	actions: {
		save: function() {
			console.log('+-- save action bubbled up to friends new route');
			return true; 
		},
		cancel: function() {
			console.log('+-- cancel action bubbled up to friends new route');
			return true; 
		}
	}
});
