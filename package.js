Package.describe({
  summary: "bootstrap alerts with halflings",
  version: "0.5.0",
  name: "selaias:bootstrap-alerts",
  git: "https://github.com/selaias/bootstrap-alerts.git",
});

Package.onUse(function (api) {
  api.versionsFrom('1.0.2.1');
  api.use(['templating','handlebars'], 'client');

  api.addFiles('lib/alerts.js', 'client');
  api.addFiles('client/alerts.js', 'client');
  api.addFiles('client/alerts.html', 'client');
  
  if(api.export) {
    api.export('Alerts', 'client');
  }

});