var plugin = class extends Quantum.Model.Plugin {
    build(atom) {
        let plugin = this;
        let config = _.clone(atom.config);

        if (config.allowedRoles && config.allowedRoles.length) {
            let allowedRoles = config.allowedRoles;
            delete config.allowedRoles;
            let otherOnBeforeAction = config.onBeforeAction;

            let onBeforeAction = function(...args) {
                try {
                    Quantum.Roles.check(Meteor.userId(), allowedRoles);
                } catch (e) {
                    return this.render('NotAuthorized')
                }

                if (otherOnBeforeAction) {
                    otherOnBeforeAction(...args);
                } else {
                    this.next()
                }
            };

            config.onBeforeAction = onBeforeAction;
        }

        return Router.route(atom.name, config);
    }

    configure(config) {
        Router.configure(config);
    }
};

Quantum.instance.plugin('route', plugin);