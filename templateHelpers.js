Template.registerHelper('onRoute', function(route, className) {
    if (Router.current().route.getName() === route) {
        return className;
    }
});
