var React = require('react');

var Header = React.createClass({

	scrollFunction: function(){
		$(function(){
			    $('#header').data('size','big');
			});

			$(window).scroll(function(){
			    if($(document).scrollTop() > 10)
			    {
			        if($('#header').data('size') == 'big')
			        {
			            $('#header').data('size','small');
			          
			            $('#header').stop().animate({
			                opacity:0.3,
			            },100);
			        }
			    }
			    else
			    {
			        if($('#header').data('size') == 'small')
			        {
			            $('#header').data('size','big');
			           
			            $('#header').stop().animate({
			                opacity:1,
			            },100);
			        }  
			    }
			});
	},

	render:function(){
		this.scrollFunction();
		return (
			<div className="header" id="header">
				<div className="headerTop">
					<div className="container row">
							<div className="col-md-3 col-sm-4 col-xs-9">
								Track My order | Contact Us
							</div>
							<div className="col-md-6 col-sm-5 col-xs-12">
								<div className="abofLogo">
									<img src="assets/images/abof-logo.png" alt="ABOF_LOGO" />
								</div>
							</div>
							<div className="col-md-3"></div>
						
					</div>
				</div>
				<div className="headerNav">
					<div className="container">
						<div className="row">
							<div className="col-md-4 col-sm-6 col-xs-6">
								<div className="col-md-4 col-sm-4 col-xs-12"> WHAT&#8217;s HOT </div>
								<div className="col-md-4 col-sm-4 hidden-xs"> MEN </div>
								<div className="col-md-4 col-sm-4 hidden-xs"> WOMEN </div>
							</div>
							<div className="col-md-offset-5 col-md-3 col-sm-offset-2 col-sm-4 col-xs-6">
								<div className="searchBox">
									<input type="text" placeholder="Search for Products, Brands" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			);
	}
});

module.exports = Header;