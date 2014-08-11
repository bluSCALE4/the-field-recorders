import DS from 'ember-data';

export default DS.Model.extend({
	url: DS.attr('string'),
	width: DS.attr('string'),
	height: DS.attr('string')
});
