var React = require('react');

var Footer = React.createClass({
	render:function(){
		return (
				<div className="row footer">
					<div className="container copyright">
						Copyright &#169; <span className="abof">abof*</span> All rights reserved
					</div>
					<div className="arrowPointer hidden-sm hidden-xs"><span class="glyphicon glyphicon-search"></span></div>
				</div>
			);
	}
});

module.exports = Footer;