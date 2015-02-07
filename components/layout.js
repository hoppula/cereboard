import React from 'react/addons';
import Navigation from './navigation';

const Layout = React.createClass({
  render() {
    return (
      <div className="container">
        <Navigation />
        {this.props.children}
      </div>
    );
  }
});

export default Layout;