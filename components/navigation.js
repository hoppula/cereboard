import React from 'react/addons';

const Navigation = React.createClass({
  render() {
    return (
      <div className="navbar navbar-default">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">Cereboard</a>
        </div>
        <div className="navbar-collapse" aria-expanded="false">
        </div>
      </div>

    );
  }
});

export default Navigation;