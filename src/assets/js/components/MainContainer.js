var React = require('react');
var Carousel = require('react-bootstrap/lib/Carousel');
var CarouselItem = require('react-bootstrap/lib/CarouselItem');

var carouselContent = [
	{
		"image" : "images/Back_Large.jpg",
		"heading" : "Back_Large",
		"text" : "ABOF Back_Large"
	},
	{
		"image" : "images/Front_Large.jpg",
		"heading" : "Front_Large",
		"text" : "ABOF Front_Large"
	},{
		"image" : "images/Left_Large.jpg",
		"heading" : "Left_Large",
		"text" : "ABOF Left_Large"
	},
    {
		"image" : "images/Right_Large.jpg",
		"heading" : "Right_Large",
		"text" : "ABOF Right_Large"
	}
];

var MainContainer = React.createClass({
	render:function(){
		var carouselItem = [];

		carouselItem = carouselContent.map(function(data,index){
			var imgSrc = "assets/"+data["image"];
			return (
					<CarouselItem>
						<div className="row">
			    			<div className="col-md-12 col-sm-12 col-xs-12">
								<img className="img-responsive center-block" alt="900x500" src={imgSrc} />
			    			</div>
						</div>
						<div className="carousel-caption">
						    <h3>{data["heading"]}</h3>
						     <p>{data["text"]}</p>
						  </div>
						</CarouselItem>
				)
		});

		return (
			<div className="container projectContainerBorder">
				<div className="row">
					<div className="col-md-5">
						<div className="row">
							<div className="col-md-3">
								<div className="category">SHOP</div>
							</div>
						</div>
						<div className="row carouselContainer">
							<Carousel>
							    {carouselItem}
							 </Carousel>
						</div>
					</div>
					<div className="col-md-2 dividerContainer"> 
						<div className="row">
							<div className="divider hidden-sm hidden-xs"></div>	
								<span>OR</span> 
							<div className="divider hidden-sm hidden-xs"></div>	
						</div>
					</div>
					<div className="col-md-5">
						<div className="row">
							<div className="col-md-3">
								<div className="category">SIGN IN</div>
							</div>
						</div>
						<div className="row">
							<form data-toggle="validator" role="form">

							 <div className="row form-group">
							  		<div className="col-md-3">
							  			<label for="inputEmail" className="control-label">Email</label>
							  		</div>
							    	<div className="col-md-9">
							    		<input type="email" className="form-control" id="inputEmail" placeholder="" data-error="Oops! Invalid mail-id" required />
							    	</div>
							    	<div className="help-block with-errors"></div>
							  </div>

							   <div className="row form-group">
							   		<div className="col-md-3">
								    	<label for="inputPassword" className="control-label">Password</label>
								    </div>
								    <div className="col-md-9">
								    	<input type="password" data-minlength="6" className="form-control" id="inputPassword" data-match="#inputPassword" data-match-error="Password way to easy to hack. Be cool, change it!" placeholder="" required />
								    	<span className="help-block">Minimum of 6 characters</span>
								    </div>
							    </div>

							     <div className="row form-group">
									  <div className="col-md-3">
									  		<label for="inputName" className="control-label">First Name *</label>
									  </div>
									   <div className="col-md-9">
									    	<input type="text" className="form-control" className="fullWidth" id="inputName" data-match-error="The first name may be symbolic but no symbols allowed here." placeholder="" required />
									   </div>
							  	</div>
							 
							 	<div className="row form-group">
									  <div className="col-md-3">
									  		<label for="inputName" className="control-label">Last Name *</label>
									  </div>
									   <div className="col-md-9">
									    	<input type="text" className="form-control" className="fullWidth" id="inputName" data-match-error="The last name may be symbolic but no symbols allowed here." placeholder="" required />
									   </div>
							  	</div>
							 
							 	<div className="row form-group">
									  <div className="col-md-3">
									  		<label for="inputName" className="control-label">Mobile </label>
									  </div>
									   <div className="col-md-9">
									    	<input type="text" className="form-control" onkeypress='return event.charCode >= 48 && event.charCode <= 57' className="fullWidth" id="inputName" data-match-error="Thats not mobile number!Cheggit" placeholder="" required />
									   </div>
							  	</div>

							  <div className="row form-group">
							   		<div className="col-md-3 col-sm-3">
										<label for="inputName" className="control-label">Gender </label>
									</div>
							    	<div className="col-md-9 col-sm-9">
							    		<div className="col-md-6 col-sm-6">
								    		<div className="radio">
										      <label>
										        	<input type="radio" name="underwear" required />
										        		Male
										      	</label>
										    </div>
									    </div>
									    <div className="col-md-6 col-sm-6">
									   		 <div className="radio">
										      	<label>
										        	<input type="radio" name="underwear" required />
										        		Female
										      	</label>
									      	</div>
									    </div>
							    	</div>
							  </div>
							  <div className="row">
							  		<div className="row terms">
							  			By joining you agree to our <a href="#"><u>terms and condition</u></a>
							  		</div>
							  </div>
							  <div className="form-group">
							  	<div className="row submitButton">
							    	<button type="submit" className="btn">Join abof</button>
							    </div>
							  </div>
							</form>
						</div>
					</div>
				</div>
			</div>
			);
	}
});

module.exports = MainContainer;