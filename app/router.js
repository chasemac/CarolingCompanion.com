import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

var Router = Ember.Router.extend(googlePageview, {
  location: config.locationType
});


Router.map(function() {
  this.route('about');
  this.route('songs', function() {
    this.route('song', { path: '/:song_id' });
  });
});

export default Router;
