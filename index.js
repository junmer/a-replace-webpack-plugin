/**
 * @file replace plugin for webpack
 */

var RawSource = require("webpack-sources/lib/RawSource");

function ReplacePlugin(options) {
    options = options || {};
    this.test = options.test || /\.css$/;
    this.from = options.from || /{#feRoot#}/g;
    this.to = options.to || '../../';
}

ReplacePlugin.prototype.apply = function (compiler) {

    var testReg = this.test;
    var from = this.from;
    var to = this.to;

    compiler.plugin("this-compilation", function(compilation) {
        compilation.plugin("optimize-assets", function(assets, callback) {

            Object.keys(assets).forEach(function (filename) {

                if(!testReg.test(filename)) {
                    callback();
                    return;
                }

                var asset = assets[filename];
                var content = asset.source();
                var result = content.replace(from, to);
                assets[filename] = new RawSource(result);

                callback();

            });

        });
    });
};

module.exports = ReplacePlugin;
