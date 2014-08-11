import DS from 'ember-data';

export default DS.Model.extend({
	url: DS.attr('string'),
	slug: DS.attr('string'),
	title: DS.attr('string'),
	type: DS.attr('string'),
	content: DS.attr('string'),
	date: DS.attr('string'),
	attachments: DS.hasMany('attachment')
});
