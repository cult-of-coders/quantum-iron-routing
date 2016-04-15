Router.requestRole = function(role, notAuthorizedTemplate = 'app.notAuthorized') {
    return function() {
        if (Quantum.Roles.has(Meteor.userId(), role)) {
            return this.next();
        } else {
            return this.render(notAuthorizedTemplate);
        }
    };
};