import Ember from 'ember';

  var songs = [{
    id: 1,
    title: 'Grand Old Mansion',
    lyrics: 'Veruca Salt'
  }, {
    id: 2,
    title: 'Urban Living',
    lyrics: 'Mike TV'
  }];

  export default Ember.Route.extend({
    model() {
      return songs;
    }
});
