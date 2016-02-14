var React = require('react');
var ReactDOM = require('react-dom');

var Abofmain = require('./components/Abofmain'); 

var App = React.createClass({
  getInitialState: function(){
    return null;
  },
  render: function(){
    return (
      <div className="container-fluid body-container">
        <Abofmain />
      </div>
    );
  }
});


ReactDOM.render(
    <App />,
    document.getElementById('app')
)
