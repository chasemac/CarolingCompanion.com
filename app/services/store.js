import Ember from 'ember';



export default Ember.Service.extend({
  getSongsById(id) {
    const songs = this.getSongs();
    return songs.findBy('id', id);
  },
  getSongs() {
    return  [
  {
     id: 'awayinamanger',
     title: 'Away In A Manger',
     lyrics: "Away in a manger no crib for a bed <br> The little Lord Jesus laid down his sweet head <br><br> The stars in the sky looked down where he lay<br> The little Lord Jesus asleep in the hay<br><br> The cattle are lowing the baby awakes<br> But little Lord Jesus no crying he makes<br><br> I love Thee Lord Jesus look down from the sky<br> And stay by my cradle til morning is nigh<br><br> Be near me Lord Jesus I ask Thee to stay<br> Close by me forever and love me I pray<br><br> Bless all the dear children in thy tender care<br> And take us to heaven to live with Thee there"
   }, {
     id: 'doyouhearwhatihear',
     title: 'Do You Hear What I Hear',
     lyrics: 'Said the night wind to the little lamb <br> do you see what I see <br>Way up in the sky little lamb <br>do you see what I see <br>A star a star dancing in the night <br>With a tail as big as a kite (x2) <br> <br>Said the little lamb to the shepherd boy <br>do you hear what I hear <br>Ringing through the sky shepherd boy <br>do you hear what I hear <br>A song a song high above the trees <br>With a voice as big as the sea (x2) <br> <br>Said the shepherd boy to the mighty king <br>do you know what I know <br>In your palace warm mighty king <br>do you know what I know <br>A Child a Child shivers in the cold <br>Let us bring Him silver and gold (x2) <br>Said the king to the people everywhere <br>listen to what I say <br>Pray for peace people everywhere <br>listen to what I say <br>The Child the Child sleeping in the night <br>He will bring us goodness and light (x2)'
   }, {
     id: 'frostythesnowman',
     title: "Frosty The Snowman",
     lyrics: "Frosty the Snowman was a jolly happy soul <br> With a corn cob pipe and a button nose and two eyes made of coal <br>  <br> Frosty the Snowman is a fairytale they say <br> He was made of snow but the children know he came to life one day <br>  <br> There must have been some magic in that old silk hat they found <br> For when they placed it on his head he began to dance around <br>  <br> Oh Frosty the Snowman was alive as he could be <br> and the children say he could laugh and play <br> just the same as you and me <br>  <br> Thumpety thump thump thumpety thump thump <br> look at Frosty go <br>  <br> Thumpety thump thump thumpety thump thump <br> over the hills of snow <br>  <br> Frosty the Snowman knew the sun was hot that day <br> so he said \"Let's run and we'll have some fun now before I melt away\" <br>  <br> Down to the village with a broomstick in his hand <br> Running here and there all around the square  <br> sayin' \"Catch me if you can\" <br>  <br> He led them down the streets of town right to the traffic cop <br> and only paused a moment when he heard him holler \"Stop\" <br>  <br> For Frosty the Snowman had to hurry on his way <br> But he waved goodbye sayin' <br> \"Don't cry I'll be back again some day\""
   }, {
     id: 'harktheharald',
     title: "Hark The Herald Angels Aing",
     lyrics: "Glory to the newborn King <br> Peace on earth and mercy mild <br>God and sinners reconciled <br>Joyful all ye nations rise <br>Join the triumph of the skies <br>With th' angelic host proclaim <br>Christ is born in Bethlehem <br>Hark the herald angels sing <br>Glory to the newborn King <br> <br>Christ by highest heav'n adored: <br>Christ the everlasting Lord <br>Late in time behold him come <br>Offspring of the favored one <br>Veil'd in flesh the Godhead see <br>Hail th'incarnate Deity: <br>Pleased as man with men to dwell <br>Jesus our Emmanuel <br>Hark the herald angels sing <br>Glory to the newborn King <br> <br>Hail the heav'n born Prince of peace <br>Hail the Son of Righteousness <br>Light and life to all he brings <br>Risen with healing in his wings <br>Mild he lays his glory by <br>Born that man no more may die: <br>Born to raise the sons of earth <br>Born to give them second birth <br>Hark the herald angels sing <br>Glory to the newborn King"
   }, {
     id: "haveYourselfAMerryLittleChristmas",
     title: "Have Yourself A Merry Little Christmas",
     lyrics: "Have yourself a merry little Christmas <br> Let your heart be light <br> From now on <br> our troubles will be out of sight  <br> Have yourself a merry little Christmas <br> Make the Yule-tide gay  <br> From now on  <br> our troubles will be miles away <br>  <br> Here were are as in olden days <br> happy golden days of yore <br> Faithful friends who are dear to us <br> gather near to us once more <br>  <br> Through the years we all will be together <br> If the Fates allow <br> Hang a shining star upon the highest bough <br> And have yourself a merry little Christmas now"
   }, {
     id: "hereComesSantaClause",
     title: "Here Comes Santa Clause",
     lyrics: "Here comes Santa Claus here comes Santa Claus  <br> Right down Santa Claus lane <br> Vixen and Blitzen and all his reindeer <br> Pullin' on the reins <br> Bells are ringin' children singin' <br> All is merry and bright <br> Hang your stockings and say your prayers <br> 'Cause Santa Claus comes tonight  <br>  <br> Here comes Santa Claus here comes Santa Claus  <br> Right down Santa Claus lane <br> He's got a bag that's filled with toys <br> For boys and girls again <br> Hear those sleigh bells jingle jangle  <br> Oh what a beautiful sight` <br> So jump in bed and cover your head <br> 'Cause Santa Claus comes tonight  <br>  <br> Here comes Santa Claus here comes Santa Claus  <br> Right down Santa Claus lane <br> He doesn't care if you're rich or poor <br> He loves you just the same <br> Santa Claus knows we're all Gods children <br> That makes everything right <br> So fill your hearts with Christmas cheer <br> 'Cause Santa Claus comes tonight  <br>  <br> Here comes Santa Claus here comes Santa Claus  <br> Right down Santa Claus lane <br> He'll come around when the chimes ring out <br> That it's Christmas morn again <br> Peace on earth will come to all <br> If we just follow the light <br> So lets give thanks to the lord above <br> That Santa Claus comes tonight"

   }, {
     id: "itCameUponAMidnightClear",
     title: "It Came Up On A Midnight Clear",
     lyrics: "It came upon the midnight clear <br> That glorious song of old <br> From angels bending near the earth <br> To touch their harps of gold <br> Peace on the earth good will to men <br> From heaven's all gracious King <br> The world in solemn stillness lay <br> To hear the angels sing <br>  <br> Still through the cloven skies they come <br> With peaceful wings unfurled <br> And still their heavenly music floats <br> O'er all the weary world <br> Above its sad and lowly plains <br> They bend on hovering wing <br> And ever o'er its Babel sounds <br> The blessed angels sing <br>  <br> Yet with te woes of sin and strife <br> The world hath suffered long <br> Beneath the angel-strain have rolled <br> Two thousand years of wrong <br> And man at war with man hears not <br> The love song which they bring: <br> O hush the noise ye men of strife <br> And hear the angels sing <br>  <br> For lo the days are hastening on <br> By prophet bards foretold <br> When with the ever-circling years <br> Shall come the Age of Gold <br> When peace shall over all the earth <br> Its ancient splendors fling <br> And all the world give back the song <br> Which now the angels sing"

   }, {
     id: "jingleBells",
     title: "Jingle Bells",
     lyrics: "Dashing through the snow <br> On a one horse open sleigh <br> O'er the fields we go <br> Laughing all the way <br> Bells on bob tail ring <br> making spirits bright <br> What fun it is to laugh and sing <br> A sleighing song tonight <br>  <br> Oh jingle bells jingle bells <br> Jingle all the way <br> Oh what fun it is to ride <br> In a one horse open sleigh <br> Jingle bells jingle bells <br> Jingle all the way <br> Oh what fun it is to ride <br> In a one horse open sleigh <br>  <br> A day or two ago <br> I thought I'd take a ride <br> And soon Miss Fanny Bright <br> Was seated by my side <br> The horse was lean and lank <br> Misfortune seemed his lot <br> We got into a drifted bank <br> And then we got upsot <br>  <br> CHORUS  <br>  <br> Now the ground is white <br> Go it while you're young <br> Take the girls tonight <br> And sing this sleighing song <br> Just get a bob tailed bay <br> two-forty as his speed <br> Hitch him to an open sleigh <br> And crack you'll take the lead <br>  <br> CHORUS"

   }, {
     id: "joyToTheWorld",
     title: "Joy To The World",
     lyrics: "Joy to The world the Lord has come <br> Let earth receive her King <br> Let ev'ry heart prepare him room <br> And heaven and nature sing (x3) <br>  <br> Joy to the world the Savior reigns <br> Let men their songs employ <br> While fields and floods rocks hills and plains <br> Repeat the sounding joy (x3) <br>  <br> He rules the world with truth and grace <br> And makes the nations prove The glories of His righteousness <br> And wonders of His love (x2) <br> And wonder wonders of His love"
   }, {
     id: "letItSnow",
     title: "Let it Snow",
     lyrics: "Oh the weather outside is frightful <br> But the fire is so delightful <br> And since we've no place to go <br> Let It Snow Let It Snow Let It Snow <br>  <br> It doesn't show signs of stopping <br> And I've bought some corn for popping <br> The lights are turned way down low <br> Let It Snow Let It Snow Let It Snow <br>  <br> When we finally kiss good night <br> How I'll hate going out in the storm <br> But if you'll really hold me tight <br> All the way home I'll be warm <br>  <br> The fire is slowly dying <br> And my dear we're still goodbying <br> But as long as you love me so <br> Let It Snow Let It Snow Let It Snow"
   }, {
     id: "littleDrummerBoy",
     title: "Little Drummer Boy",
     lyrics: "(RPPP = \"rum pum pum pum\") <br>  <br> Come they told me <br> Pa RPPP <br> A new born King to see <br>  <br> Our finest gifts we bring <br> Pa RPPP <br> To lay before the king <br> Pa RPPP <br> RPPP <br> RPPP  <br>  <br> So to honor Him <br> Pa RPPP <br> When we come <br>  <br> Little baby <br> Pa RPPP <br> I am a poor boy too <br> Pa RPPP <br> I have no gift to bring <br> Pa RPPP <br> That's fit to give our King <br> Pa RPPP <br> RPPP <br> RPPP <br>  <br> Shall I play for you <br> Pa RPPP <br> On my drum <br>  <br> Mary nodded <br> Pa RPPP <br> The ox and lamb kept time <br> Pa RPPP <br> I played my drum for Him <br> Pa RPPP <br> I played my best for Him <br> Pa RPPP <br> RPPP <br> RPPP <br>  <br> Then He smiled at me <br> Pa RPPP <br> Me and my drum"

   }, {
     id: "oChristmasTree",
     title: "O Christmas Tree",
     lyrics: "O Christmas tree O Christmas tree <br> How are thy leaves so verdant <br> O Christmas tree O Christmas tree <br> How are thy leaves so verdant <br>  <br> Not only in the summertime <br> But even in winter is thy prime <br> O Christmas tree O Christmas tree <br> How are thy leaves so verdant <br>  <br> O Christmas tree O Christmas tree <br> Much pleasure doth thou bring me <br> O Christmas tree O Christmas tree <br> Much pleasure doth thou bring me <br>  <br> For every year the Christmas tree <br> Brings to us all both joy and glee <br> O Christmas tree O Christmas tree <br> Much pleasure doth thou bring me <br>  <br> O Christmas tree O Christmas tree <br> Thy candles shine out brightly <br> O Christmas tree O Christmas tree <br> Thy candles shine out brightly <br>  <br> Each bough doth hold its tiny light <br> That makes each toy to sparkle bright <br> O Christmas tree O Christmas tree <br> Thy candles shine out brightly"
   }, {
     id: "oComeAllYeFaithful",
     title: "O Come All Ye Faithful",
     lyrics: "O come all ye faithful <br> Joyful and triumphant <br> O come ye O come ye to Bethlehem <br> Come and behold Him <br> Born the King of Angels <br>  <br> O come let us adore Him (x3) <br> Christ the Lord <br>  <br> Sing alleluia <br> All ye choirs of angels <br> O sing all ye blissful ones of heav'n above <br> Glory to God  <br> In the highest glory <br>  <br> O come let us adore Him (x3) <br> Christ the Lord <br>  <br> Yea Lord we greet Thee <br> Born this happy morning <br> Jesus to Thee be the glory giv'n <br> Word of the Father <br> Now in the flesh appearing <br>  <br> O come let us adore Him (x3) <br> Christ the Lord"
   }, {
     id: "rudolphTheRedNoseReindeer",
     title: "Rudolph The Red Nose Reindeer",
     lyrics: "You know Dasher and Dancer and <br> Prancer and Vixen <br> Comet and Cupid and <br> Donder and Blitzen <br> But do you recall <br> The most famous reindeer of all <br>  <br> Rudolph the red-nosed reindeer <br> had a very shiny nose <br> and if you ever saw it <br> you would even say it glows <br>  <br> All of the other reindeer <br> used to laugh and call him names <br> They never let poor Rudolph <br> play in any reindeer games <br>  <br> Then one foggy Christmas eve <br> Santa came to say <br> Rudolph with your nose so bright <br> won't you guide my sleigh tonight <br>  <br> Then all the reindeer loved him <br> as they shouted out with glee <br> Rudolph the red-nosed reindeer <br> you'll go down in history"
   }, {
     id: "silentNight",
     title: "Silent Night",
     lyrics: "All is calm all is bright<br> Round yon Virgin Mother and Child<br> Holy infant so tender and mild<br> Sleep in heavenly peace<br> Sleep in heavenly peace<br> <br> Silent night holy night<br> Shepherds quake at the sight<br> Glories stream from heaven afar<br> Heavenly hosts sing Alleluia<br> Christ the Savior is born<br> Christ the Savior is born<br> <br> Silent night holy night<br> Son of God love's pure light<br> Radiant beams from Thy holy face<br> With dawn of redeeming grace<br> Jesus Lord at Thy birth<br> Jesus Lord at Thy birth"
   }, {
     id: "silverBells",
     title: "Silver Bells",
     lyrics: "City sidewalks busy sidewalks <br> Dressed in holiday style <br> In the air <br> There's a feeling <br> of Christmas <br> Children laughing <br> People passing <br> Meeting smile after smile <br> and on every street corner you'll hear <br>  <br> Silver bells silver bells <br> It's Christmas time in the city <br> Ring-a-ling hear them sing <br> Soon it will be Christmas day <br>  <br> Strings of street lights <br> Even stop lights <br> Blink a bright red and green <br> As the shoppers rush <br> home with their treasures <br>  <br> Hear the snow crunch <br> See the kids bunch <br> This is Santa's big scene <br> And above all this bustle <br> You'll hear <br>  <br> Silver bells silver bells <br> It's Christmas time in the city <br> Ring-a-ling hear them sing <br> Soon it will be Christmas day"
   }, {
     id: "theFirstNoel",
     title: "The First Noel",
     lyrics: "The First Noel the angel did say <br> Was to certain poor shepherds <br> in fields as they lay <br> In fields as they lay keeping their sheep <br> On a cold winter's night that was so deep <br>  <br> Noel Noel Noel Noel <br> Born is the King of Israel <br>  <br> They looked up and saw a star <br> Shining in the east beyond them far <br> And to the earth it gave great light <br> And so it continued both day and night <br>  <br> And by the light of that same star <br> Three wise men came from country far <br> To seek for a king was their intent <br> And to follow the star wherever it went <br>  <br> This star drew nigh to the northwest <br> O'er Bethlehem it took it rest <br> And there it did both stop and stay <br> Right over the place where Jesus lay <br>  <br> Then entered in those wise men three <br> Full reverently upon their knee <br> and offered there in his presence <br> Their gold and myrrh and frankincense <br>  <br> Then let us all with one accord <br> Sing praises to our heavenly Lord <br> That hath made heaven and earth of naught <br> And with his blood mankind hath bought"
   }, {
     id: "winterWonderland",
     title: "Winter Wonderland",
     lyrics: "Sleigh bells ring <br> are you listening <br> in the lane <br> snow is glistening <br> A beautiful sight <br> we're happy tonight <br> walking in a winter wonderland <br>  <br> Gone away is the bluebird <br> here to stay is a new bird <br> He sings a love song <br> as we go along <br> walking in a winter wonderland <br>  <br> In the meadow we can build a snowman <br> Then pretend that he is Parson Brown <br> He'll say: Are you married? <br> we'll say: No man <br> But you can do the job <br> when you're in town <br>  <br> Later on <br> we'll conspire <br> as we dream by the fire <br> To face unafraid <br> the plans that we've made <br> walking in a winter wonderland <br>  <br> In the meadow we can build a snowman <br> and pretend that he's a circus clown <br> We'll have lots of fun with mister snowman <br> until the the other kids knock him down <br>  <br> When it snows <br> ain't it thrilling <br> Though your nose gets a chilling <br> We'll frolic and play <br> the Eskimo way <br> walking in a winter wonderland <br>  <br> Walking in a winter wonderland <br> walking in a winter wonderland"
   }
    ];
  }
});
