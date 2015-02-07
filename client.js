require('native-promise-only');

import React from 'react/addons';
import cerebellum from 'cerebellum';
import options from './options';

const Layout = React.createFactory(require('./components/layout'));

options.render = function(component, request={}) {
  let view = React.createFactory(component);
  let store = this.store;
  return new Promise(function(resolve, reject) {
    return store.fetchAll(component.fetch(request)).then(function(props) {
      let title = typeof component.title === "function" ? component.title(props) : component.title;
      document.getElementsByTagName("title")[0].innerHTML = `Cereboard - ${title}`;
      React.withContext({store: store}, function() {
        resolve(React.render(Layout({children: view(props)}), document.getElementById(options.appId)));
      });
    }).catch(reject);
  });
};

options.initialize = (client) => {
  React.initializeTouchEvents(true);
};

cerebellum.client(options);