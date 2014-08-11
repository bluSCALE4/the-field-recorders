import DS from 'ember-data';

export default DS.Model.extend({
 	url: DS.attr('string'),
 	slug: DS.attr('string'),
 	title: DS.attr('string'),
 	description: DS.attr('string'),
 	caption: DS.attr('string'),
 	mime_type: DS.attr('string'),
 	// images: DS.belongsTo('images')
});
