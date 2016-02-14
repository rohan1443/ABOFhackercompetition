var React = require('react');
var Header = require('./Header.js');
var MainContainer = require('./MainContainer.js');
var Footer = require('./Footer.js');


var Abofmain = React.createClass({

    render: function() { 
        return (
        	<div className="">
	            <Header />
                <MainContainer />
                <Footer />
            </div>
        );
    },
});

module.exports = Abofmain;
