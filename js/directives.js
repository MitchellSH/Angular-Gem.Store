(function(){
  var app = angular.module('custom-directives', [ ]);
// Custom Directives //-----------------------------------

  // Creating a Custom Directive //
  app.directive('productTitle', function(){
    // Dashes('-') in HTML translates to camelCase in Javascript.
    // So in HTML 'product-title' will translate to 'productTitle' in Javascript.
    return {
      restrict: 'E',
      // Type of directive: "E" stands for Element.
      // Another type of directive: "A" for Attribute.
      // Example of "A" Directive:
      // <h3 product-title></h3> //
      // Example of "E" Directive:
      // <product-title></product-title> //
      templateUrl: 'partials/product-title.html' // The Url of the template or partial we want to load into the element('E').
    };

  });

  app.directive('panelTabs', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/panel-tabs.html'
    };

  });
  app.directive('reviewsForm', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/reviews-form.html'
    };

  });
  app.directive('productPanels', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/product-panels.html',
      // Writing a controller inside a custom directive.
      controller: function(){
        this.tab = 1;

        this.selectTab = function(setTab){
          this.tab = setTab;

        };

        this.isSelected = function(checkTab){
          return this.tab === checkTab;
        };

      },
      // The attribute alias for the controller.
      controllerAs: 'panel'
    };
  });

})();
