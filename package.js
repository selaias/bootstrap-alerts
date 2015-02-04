Package.describe({
  name: 'selaias:alerts',
  version: '0.3.0',
  summary: 'Bootstrap styled alerts with halflings',
  git: 'https://github.com/selaias/bootstrap-alerts.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  
  api.use(['templating'], 'client');

  //js
  api.addFiles('client/alerts.js', 'client');
  
  //templates
  api.addFiles('alerts.html', 'client'); 
  api.addFiles('alerts.js', 'client');
  
  //object
  if(api.export) {
    api.export('Alerts', 'client')
  }
});
