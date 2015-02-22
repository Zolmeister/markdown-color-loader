markdown-color-loader
===============

markdown color loader for webpack


## Usage

```javascript
var html = require("html!markdown-color!./README.md");
```

## Recommended Configuration

Best served with html-loader.

```javascript
{
    module: {
        loaders: {
            { test: /\.md$/, loader: "html!markdown-color" },
        ]
    }
}
```
