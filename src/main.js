var plugin = require('./SourcefileUrlMapPlugin');

module.exports = function(PluginHost) {
    var app = PluginHost.owner;

    app.options.addDeclaration({name: 'sourcefile-link-map'});
    app.options.addDeclaration({name: 'sourcefile-link-prefix'});
    app.options.addDeclaration({name: 'sourcefile-link-lines-str'});

    app.converter.addComponent('sourcefile-link', plugin.SourcefileUrlMapPlugin);
};