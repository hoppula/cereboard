import React from 'react/addons';

const Board = React.createClass({

  statics: {
    fetch: function(request) {
      return {
        board: {id: request.params.id},
      };
    },
    title: function(props) {
      return props.board.title;
    }
  },

  render() {
    return (
      <div className="board">
        <table>
          <thead>
            <tr><th>{this.props.board.title}</th></tr>
          </thead>
          <tbody>
            {this.props.board.threads.map(thread => {
              return (
                <tr key={thread.id}><td><a href={`/boards/${this.props.board.id}/${thread.id}`}>{thread.title}</a></td></tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

});

export default Board;