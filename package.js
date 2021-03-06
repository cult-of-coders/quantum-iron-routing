Package.describe({
    name: 'cultofcoders:quantum-iron-routing',
    version: '1.1.0',
    // Brief, one-line summary of the package.
    summary: 'Based on iron router, this plugin allows you to easily create routes within quantum framework',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.1');

    api.use([
        'ecmascript',
        'templating',
        'cultofcoders:quantum-framework@1.1.1',
        'iron:router@1.0.12'
    ]);

    api.imply('iron:router@1.0.12');

    api.addFiles(['plugin.js']);

    api.addFiles([
        'extension.js',
        'templateHelpers.js'
    ], 'client')
});

Package.onTest(function (api) {
    api.use('ecmascript');
    api.use('tinytest');
});
