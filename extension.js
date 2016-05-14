Router.requestRole = function (role) {
    let roles = QF.use('service', 'roles');

    return function () {
        if (roles.has(Meteor.userId(), role)) {
            return this.next();
        } else {
            return this.render(Router.options['notAuthorizedTemplate']);
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