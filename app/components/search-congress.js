import Ember from 'ember';
import ENV from '../config/environment';

var Observable = Rx.Observable;

let getCongressman = (term) =>
    Observable.create(function forEach(observable) {
        let cancelled = false;
        let url = "http://congress.api.sunlightfoundation.com/legislators/locate?apikey=9f64292279cc4c40aea72946979597a2&zip=" + encodeURIComponent(term);

        $.getJSON(url, (data) => {
            if (!cancelled) {
                observable.onNext(data.results);
                observable.onCompleted();
            }
        });

        return function dispose() {
            cancelled = true;
        }
    });

getCongressman('11220').forEach( (results) =>
        console.log(results)
);

getCongressman('11220').forEach( (results) =>
        results.forEach( (result) =>
                console.log(result)
        )
);

export default Ember.Component.extend({

  //searchLeg: null,
  //
  //searchResults: [],
  //
  //updateResults: function () {
  //
  //  var self = this;
  //  var searchLeg = self.get('searchLeg');
  //
  //  if (!searchLeg) {return;}
  //
  //  var encoded = encodeURIComponent(searchLeg);
  //  var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=' + ENV.CongressAPIKey + '&name=' + encoded;
  //
  //  return null;
  //}


});
