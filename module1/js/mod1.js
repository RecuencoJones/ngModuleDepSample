var mod1 = angular.module('module1', []);

mod1.service('Mod1Service', function() {

  return {
    getGreeting: function(who) {
      return 'Hi ' + who + '!';
    }
  }
});
