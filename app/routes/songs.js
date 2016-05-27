import Ember from 'ember';

  // const songs = [{
  //   id: 'awayinamanger',
  //   title: 'Away In A Manger',
  //   lyrics: 'Veruca Salt'
  // }, {
  //   id: 'doyouhearwhatihear',
  //   title: 'Do You Hear What I Hear',
  //   lyrics: 'Said the night wind to the little lamb <br>do you see what I see <br>Way up in the sky little lamb <br>do you see what I see <br>A star a star dancing in the night <br>With a tail as big as a kite (x2) <br> <br>Said the little lamb to the shepherd boy <br>do you hear what I hear <br>Ringing through the sky shepherd boy <br>do you hear what I hear <br>A song a song high above the trees <br>With a voice as big as the sea (x2) <br> <br>Said the shepherd boy to the mighty king <br>do you know what I know <br>In your palace warm mighty king <br>do you know what I know <br>A Child a Child shivers in the cold <br>Let us bring Him silver and gold (x2) <br>Said the king to the people everywhere <br>listen to what I say <br>Pray for peace people everywhere <br>listen to what I say <br>The Child the Child sleeping in the night <br>He will bring us goodness and light (x2)'
  // }];

  export default Ember.Route.extend({
    model() {
      const store = this.get('store');
      return store.getSongs();
    },
    store: Ember.inject.service()
});
