import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const id = params.song_id;
    const store = this.get('store');
    return store.getSongsById(id);
  },
  store: Ember.inject.service()

});
