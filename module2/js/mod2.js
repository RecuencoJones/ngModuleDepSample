var mod2 = angular.module('module2', []);

mod1.service('Mod2Service', function() {

  return {
    getGreeting: function(who) {
      return 'Yo ' + who + '!';
    }
  }
});
