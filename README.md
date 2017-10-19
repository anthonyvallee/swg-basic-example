# swg-basic-example
Basic example teaching how to use gulp-swg minimally.

The setup should be simple enough:

```bash
# gulp-cli should be installed globally
$ npm install -g gulp-cli

# swg-basic-example installation
$ npm install
$ gulp
```

What you should know:
  - Template files that start with an underscore (e.g. _menu.html) are not processed by gulp. They only serve as partial templates.
  - The `src/global.js` file serves as a global context, such that all attributes of the global object can be used in any template.
  - The `src/assets`/ folder is copied to the build directory. Useful to include asset files (CSS, JS).

You may also use the `gulp watch` command for continuous development.

Refer to [Nunjucks' documentation](https://mozilla.github.io/nunjucks/templating.html) for documentation regarding the templating engine.
