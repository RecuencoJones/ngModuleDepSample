var mod2 = angular.module('module2', []);

mod2.service('Mod2Service', function() {

  return {
    getGreeting: function(who) {
      return 'Yo ' + who + '!';
    }
  }
});
