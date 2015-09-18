import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Route.extend({
    model: function (params) {
        var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=' + ENV.CongressAPIKey + '&zip=' + params.zip;
        return Ember.$.getJSON(url).then(function (responseJSON) {
            var legislators = [];
            responseJSON.results.forEach(function (legislator) {
                legislators.push(legislator);
            });
            return legislators;
        });
    }
});
