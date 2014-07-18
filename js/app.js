(function(){
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function(){
    this.products = gems;

  });

  app.controller('PanelController', function(){
    this.tab = 1;

    this.selectTab = function(setTab){
      this.tab = setTab;

    };

    this.isSelected = function(checkTab ){
      return this.tab === checkTab;
    };

  });


  var gems = [
    {
      name: 'Silentium',
      price: 2342452.95,
      description: "Neutra Marfa PBR&B, cray ethnic put a bird on it iPhone brunch kitsch paleo. Plaid meh fixie, Portland freegan Wes Anderson lomo. Keffiyeh PBR&B ennui, street art cardigan butcher freegan letterpress disrupt farm-to-table viral flexitarian Kickstarter brunch. Cray direct trade mixtape 8-bit, seitan XOXO raw denim 90's readymade organic locavore mlkshk pop-up. Blue Bottle fashion axe tofu, sustainable chillwave slow-carb cliche church-key bitters ethical cred roof party Helvetica. Locavore shabby chic raw denim twee crucifix American Apparel literally, cornhole food truck pour-over semiotics Etsy.",
      images:[
      {
        full: 'images/gem-09.gif'
      }
      ]
    },
    {
      name: 'Primordium',
      price: 30025345,
      description: "Vegan keffiyeh freegan roof party pug cred, quinoa chia Neutra Cosby sweater authentic Kickstarter PBR&B Helvetica. Gentrify selvage 90's, cardigan aesthetic DIY swag flannel twee lo-fi vinyl. Kale chips seitan Shoreditch asymmetrical, Cosby sweater biodiesel food truck freegan wayfarers PBR&B Pitchfork small batch. Church-key Bushwick flexitarian Wes Anderson roof party Neutra, Blue Bottle Banksy messenger bag.",
      images: [
      {
        full: 'images/gem-07.gif'
      }
      ]
    },
    {
      name: 'Byzantium',
      price: 12353460,
      description: 'American Apparel mlkshk Pitchfork iPhone, sustainable fixie Odd Future fashion axe organic normcore seitan. Normcore dreamcatcher literally roof party, leggings Helvetica four loko polaroid PBR&B pickled disrupt food truck hella. Letterpress organic freegan deep v.',
      images: [
      {
        full: 'images/gem-02.gif'
      }
      ]
    }
  ];

})();
