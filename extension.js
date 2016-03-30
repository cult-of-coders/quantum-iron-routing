Router.requestRole = function(role) {
    return function() {
        if (Quantum.Roles.has(Meteor.userId(), role)) {
            return this.next();
        } else {
            return this.render('app.notAuthorized');
        }
    };
};