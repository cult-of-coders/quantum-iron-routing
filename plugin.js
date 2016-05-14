var plugin = class extends Quantum.Model.Plugin {
    build(atom) {
        let config = _.clone(atom.config);
        let routeOption = this.getRouterOption;
        let roles = QF.use('service', 'roles');

        if (config.allowedRoles && config.allowedRoles.length) {
            let allowedRoles = config.allowedRoles;
            delete config.allowedRoles;
            let otherOnBeforeAction = config.onBeforeAction;

            let onBeforeAction = function(...args) {
                try {
                    roles.check(Meteor.userId(), allowedRoles);
                } catch (e) {
                    return this.render(routeOption('notAuthorizedTemplate'))
                }

                if (otherOnBeforeAction) {
                    otherOnBeforeAction(...args);
                } else {
                    this.next()
                }
            };

            config.onBeforeAction = onBeforeAction;
        }

        let serverOptions = {};
        if (Meteor.isServer) {
            serverOptions = {where: 'server'};
        }

        return Router.route(atom.name, config, serverOptions);
    }

    configure(config) {
        Router.configure(config);
    }

    getRouter() {
        return Router;
    }

    getRouterOption(key) {
        return this.getRouter().options[key];
    }
};

Quantum.instance.plugin('route', plugin);