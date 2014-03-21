Package.describe({
  summary: "Impact (alpha)"
});

Package.on_use(function (api, where) {
  api.export(['App', 'Modules', 'Widgets', 'Media', 'Panels']);
  where = where || ['client', 'server'];
  api.add_files('index.js', where);
});
