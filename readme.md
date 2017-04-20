a replace plugin for webpack
===

> a simple replace solution

## Usage

```javascript

var ReplacePlugin = require("a-replace-webpack-plugin");

module.exports = {
    plugins: [
        new ReplacePlugin({
            test: /\.css/,
            from: /{#feRoot#}/,
            to: '../../'
        })
    ]
};

```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
