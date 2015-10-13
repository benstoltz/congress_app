import Ember from 'ember';
import ENV from '../config/environment';

var Observable = Rx.Observable;
var textbox = "";
var nameList = [];


let getAllCongressman = () =>
    Observable.create(function forEach(observable) {
        let cancelled = false;
        let url = "http://congress.api.sunlightfoundation.com/legislators?per_page=all&apikey=9f64292279cc4c40aea72946979597a2";
        $.getJSON(url, data => {
            if (!cancelled) {
                observable.onNext(data.results);
                observable.onCompleted();
            }
        });

        return function dispose() {
            cancelled = true;
        }
    });



getAllCongressman().forEach( (resultSet) => {
    resultSet.forEach( (result) => {
        nameList.push(result.first_name + " " + result.last_name);
    });
    console.log(nameList);
    new Awesomplete(textbox, {list: nameList} )
});

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
