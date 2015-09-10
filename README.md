
# Congress-app

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)



Ben Stoltz
Congress App: Display Sunlight Congress API congressional data + map. Future plans to integrate donation information
Ver: 0.0.1
Nov 10, 2014
==========

To Do:

Mapping application:
    Layer selection
        base map layer
        congressional district layer
        Demographic layers
            household values
            diversity
            income
            ???
    Behavior
        on click OR enter of data:
            zoom to state or congressional district and offer a choice of representative
            Place a graphics overlay over the rest of the state/country to focus on that area
            data about that representative becomes available



Congressional data:
    Sunlight foundation:
        Congress API
        Influence Explorer
        Real-Time Fed Campaign finance api?
     Other data:
        Approval ratings?
        voter turnout?



Twitter data:
    Query by representative
    display tweets by the representative
    display tweets about the representative?
    Sentiment analysis?
