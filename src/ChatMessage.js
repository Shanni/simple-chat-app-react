var createReactClass = require('create-react-class');
var React = require('react');

module.exports = createReactClass({
  render: function() {
    return <p>{this.props.message}</p>;
  }
});