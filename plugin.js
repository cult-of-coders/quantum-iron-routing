var plugin = class extends Quantum.Model.Plugin {
    build(atom) {
        Router.route(atom.name, atom.config)
    }

    isConfigurable() {
        return true;
    }

    configure(config) {
        Router.configure(config);
    }
};

Quantum.instance.plugin('route', plugin);