import Ember from 'ember';

export default Ember.Route.extend({
    model: function (params) {
        var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=9f64292279cc4c40aea72946979597a2&zip=' + params.zip;
        return Ember.$.getJSON(url).then(function (responseJSON) {
            var legislators = [];
            responseJSON.results.forEach(function (legislator) {
                legislators.push(legislator);
            });
            return legislators;
        })
    }
});
