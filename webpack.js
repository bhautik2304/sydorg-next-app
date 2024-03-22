export function webpack(config) {
    config.plugins.push(
      new (require('webpack').ProvidePlugin)({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      })
    );
    return config;
  }