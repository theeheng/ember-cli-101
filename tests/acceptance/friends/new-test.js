
import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../helpers/start-app';

var application;

module('Acceptance: FriendsNew', {
	beforeEach: function() {
		application = startApp();
	},
	afterEach: function() {
		Ember.run(application, 'destroy');
	}
});


test('visiting /friends/new', function(assert) {
	visit('/friends/new');
	andThen(function() {
		assert.equal(currentPath(), 'friends.new');
	});
});

test('Creating a new friend', function(assert) {
visit('/');
click('a[href="/friends/new"]');
andThen(function() {
assert.equal(currentPath(), 'friends.new');
});
fillIn('input[placeholder="First Name"]', 'Johnny');
fillIn('input[placeholder="Last Name"]', 'Cash');
fillIn('input[placeholder="email"]', 'j@cash.com');
fillIn('input[placeholder="twitter"]', 'jcash');
click('input[value="Save"]');
//
// Clicking save will fire an async event.
// We can use andThen, which will be called once the promises above
// have been resolved.
//
andThen(function() {
assert.equal(
currentRouteName(),
'friends.show.index',
'Redirects to friends.show after create'
);
});
});

test('Clicking save without filling fields', function(assert) {
visit('/friends/new');
click('input[value="Save"]');
andThen(function() {
assert.equal(
currentRouteName(),
'friends.new',
'Stays on new page'
);
assert.equal(
find("h2:contains(You have to fill all the fields)").length,
1,
"Displays error message"
);
});
});