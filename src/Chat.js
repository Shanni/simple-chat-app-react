
var createReactClass = require('create-react-class');
var React = require('react');

var MessageList = require('./MessageList');
var MessageForm = require('./MessageForm');
var MessageStore = require('./MessageStore');

module.exports = createReactClass({
  getInitialState: function() {
    return {
      messages: MessageStore.getMessages()
    };
  },
  
  componentWillMount: function() {
    MessageStore.subscribe(this.updateMesssages);
  },

  componentWillUnMount: function() {
    MessageStore.unsubscribe(this.updateMesssages);
  },

  updateMesssages: function() {
    this.setState({
      messages: MessageStore.getMessages(),
    });
  },

  onSend: function(newMessage) {
    MessageStore.newMessage(newMessage);
  },
 
  render: function() {
    return <div>
      <MessageList messages = {this.state.messages}/>
      <MessageForm onSend = {this.onSend} />
    </div>;
  }
});