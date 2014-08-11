import Em from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	extractArray: function(store, type, payload) {
		var temp = {};

		// temp solution for metadata
		delete payload.status;
		delete payload.count;
		delete payload.count_total;
		delete payload.pages;

		if (payload[Em.String.pluralize(type.typeKey)]) {

		} else {
			temp = payload;
			payload = {};

			payload[type.typeKey] = temp;
		}

        return this._super(store, type, payload);
	}
});
