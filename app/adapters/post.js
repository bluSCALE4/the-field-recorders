import Em from 'ember';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	// host: 'http://www.thefieldrecorders.com',
	namespace: 'blog',
  	pathForType: function(type) {
	    var decamelized = Em.String.decamelize(type);
	    // return Ember.String.pluralize(decamelized);
	    return '?json=1'
  	}
});

// https://api.soundcloud.com/users/47105083.json?client_id=d483a639c26987060fabcd74a0b10763
// http://api.soundcloud.com/users/47105083/playlists?client_id=d483a639c26987060fabcd74a0b10763
