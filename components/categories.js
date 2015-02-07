import React from 'react/addons';

const Categories = React.createClass({

  statics: {
    fetch: function() {
      return {
        categories: {},
      };
    },
    title: "Categories"
  },

  render() {
    return (
      <div className="categories">
        {this.props.categories.map(category => {
          return (
            <table key={category.id}>
              <thead>
                <tr><th>{category.title}</th></tr>
              </thead>
              <tbody>
                {category.boards.map(board => {
                  return (
                    <tr key={board.id}>
                      <td><a href={`/boards/${board.id}`}>{board.title}</a></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          );
        })}
      </div>
    );
  }

});

export default Categories;