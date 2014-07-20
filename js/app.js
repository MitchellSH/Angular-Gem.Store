(function(){
  // MODULES - Where we write pieces of our Angular application.
  // Modules can also use other modules in their dependencies array('[ ]').
  var app = angular.module('store', ['custom-directives']);
  // You can name your module whatever you want, there is nothing magical about the name.
  // In this case I used the name of 'store' for my gems store.

  // js dependencies go inside the blank array('[ ]').

  // For example I made a .js file for my directives which I called 'directives.js'.
  // I included that script in the head of my HTML, and added the name to the main app.js dependencies array above.

  // Think of dependencies as HTML partials but in JS form.

// Controllers //-----------------------------------------
  // CONTROLLERS - Where we define our app's behavior by defining functions and values.
  app.controller('StoreController', function(){
    this.products = gems;

  });

  app.controller('ReviewController', function(){
      this.review = {};

      this.addReview = function(product){
        this.review.createdOn = Date.now();
        product.reviews.push(this.review);
        this.review = {};
      };
  });


// The Store Products //-----------------------------------------

  var gems = [
    {
      name: 'Silentium',
      price: 2342452.95,
      description: "Neutra Marfa PBR&B, cray ethnic put a bird on it iPhone brunch kitsch paleo. Plaid meh fixie, Portland freegan Wes Anderson lomo. Keffiyeh PBR&B ennui, street art cardigan butcher freegan letterpress disrupt farm-to-table viral flexitarian Kickstarter brunch. Cray direct trade mixtape 8-bit, seitan XOXO raw denim 90's readymade organic locavore mlkshk pop-up. Blue Bottle fashion axe tofu, sustainable chillwave slow-carb cliche church-key bitters ethical cred roof party Helvetica. Locavore shabby chic raw denim twee crucifix American Apparel literally, cornhole food truck pour-over semiotics Etsy.",
      images:[
      {
        full: 'images/gem-09.gif'
      }
      ],
      reviews: [
      {
        stars: 5,
        body: "I love this gem!",
        author: "joe@thomas.com"
      },
      {
        stars: 4,
        body: "Primordium is a bit better but still great!",
        author: "didact@halo.com"
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
      ],
      reviews: [
      {
        stars: 2,
        body: "I hate this gem!",
        author: "joe@thomas.com"
      },
      {
        stars: 1,
        body: "Too expensive!",
        author: "didact@halo.com"
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
      ],
      reviews: [
      {
        stars: 2,
        body: "I hate this gem!",
        author: "joe@thomas.com"
      },
      {
        stars: 5,
        body: "I love this gem! It's awesome!",
        author: "bill@hill.com"
      },
      {
        stars: 1,
        body: "Too expensive!",
        author: "didact@halo.com"
      }
      ]
    }
  ];

})();
