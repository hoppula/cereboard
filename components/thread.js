import React from 'react/addons';

const Thread = React.createClass({

  statics: {
    fetch: function(request) {
      return {
        thread: {id: request.params.thread_id},
      };
    },
    title: function(props) {
      return props.thread.title;
    }
  },

  render() {
    return (
      <div className="thread">
        <h1>{this.props.thread.title}</h1>
        <div>{this.props.thread.body}</div>
      </div>
    );
  }

});

export default Thread;