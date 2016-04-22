Router.requestRole = function (role, notAuthorizedTemplate = 'app.notAuthorized') {
    return function () {
        if (Quantum.Roles.has(Meteor.userId(), role)) {
            return this.next();
        } else {
            return this.render(notAuthorizedTemplate);
        }
    };
};

Q('template').extend({
    'route': {
        type: Object,
        blackbox: true,
        optional: true
    }
}, function (atom) {
    let config = atom.config;

    if (config.route) {
        let path = config.route.path;
        delete config.route.path;
        config.route.template = atom.name;

        QF.add('route', path, config.route)
    }
});