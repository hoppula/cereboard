// 6to5 supports .jsx out of the box
require('6to5/register');
require('native-promise-only');

var React = require('react/addons');
var cerebellum = require('cerebellum');
var compress = require('compression');
var bodyParser = require('body-parser');

var Store = cerebellum.Store;
var options = require('./options');

var Layout = React.createFactory(require('./components/layout'));

options.render = function render(document, component, request) {
  var view = React.createFactory(component);
  var store = this.store;
  return new Promise(function(resolve, reject) {
    store.fetchAll(component.fetch(request)).then(function(props) {
      var title = typeof component.title === "function" ? component.title(props) : component.title;
      document("title").html("Cereboard - "+ title);
      document("#"+options.storeId).text(store.snapshot());
      React.withContext({store: store}, function() {
        document("#"+options.appId).html( React.renderToString(Layout({children: view(props)})) );
        resolve(document.html());
      });
    }).catch(reject);
  });
};

// pass your middleware to express with options.middleware
options.middleware = [
  compress(),
  bodyParser.json(),
  bodyParser.urlencoded({extended: true})
];

var app = cerebellum.server(options);

// API
app.use("/api", require('./api'));

// always register static files middleware after defining routes
app.useStatic();

app.listen(Number(process.env.PORT || 4000), function() {
  console.log("cereboard dev server listening on port "+ (this.address().port));
});