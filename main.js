// $(function() {
//   $('#user-email').on('input',function() {
//     var email = $('#user-email').val();
//     var message = 'Welcome back, '+ email;
//     $('.welcome-message').text(message);
//
//
//       });
// });
var foodieApp = angular.module('foodieApp',['ngRoute']);
foodieApp.config(function($routeProvider){
 $routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
    
    .when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
    	.when('/fav', {
		templateUrl: 'pages/fav.html',
		controller: 'favController'
	})
    
    
})
foodieApp.controller('loginController',function($scope,$location){
    $scope.goToHome = function(){
        console.log($location.url())
        $location.url('home');
    }
    
})



foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
$scope.ingredients = [];


	$scope.restaurantId = $routeParams.id;
	var restaurants = [{
                name: 'Farzi Cafe',
                address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
                location: 'Connaught Place',
                category: 'Casual Dining, Bar',
                vote: '4.2',
                cuisines: 'Modern Indian',
                cost: '2200',
                hours: '12 Noon to 1 AM (Mon-Sun)',
                bestDish: {
                    name: 'Corn Pizza',
                    image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
                },
                image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg',
                 id : 1
        
        },
                {
                name: 'Flying Kukkad',
                address: '38/39, Level 1, Gurgaon',
                location: 'Connaught Place',
                category: 'Casual Dining, Bar',
                vote: '4.2',
                cuisines: 'North Indian, Continental, Lebanese',
                cost: '600',
                hours: '12 Noon to 1 AM (Mon-Sun)',
                bestDish: {
                    name: 'Corn Pizza',
                    image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
                },
                image: 'https://thumb7.shutterstock.com/display_pic_with_logo/288100/184074431/stock-photo-marinated-grilled-healthy-chicken-breasts-cooked-on-a-summer-bbq-and-served-with-fresh-herbs-and-184074431.jpg',
                      id : 2

        },
            {
                name: 'The Big Chill Cakery',
                address: 'Main Market, Khan Market, New Delhi',
                location: 'Khan Market',
                category: 'BAKERY,DESSERT PARLOR',
                vote: '4.3',
                cuisines: 'Bakery, Desserts',
                cost: '700',
                hours: '8 AM to 12 Midnight (Mon-Sun)',
                bestDish: {
                    name: 'Corn Pizza',
                    image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
                },
                image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?h=350&auto=compress&cs=tinysrgb',
                      id : 3

        },
                              {
                name: 'Dominos Pizza',
                address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
                location: 'Connaught Place',
                category: 'QUICK BITES',
                vote: '3.5',
                cuisines: 'Pizza, Fast Food',
                cost: '600',
                hours: '11 AM to 11 PM (Mon-Sun)',
                bestDish: {
                    name: 'Corn Pizza',
                    image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
                },
                image: 'https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?h=350&auto=compress&cs=tinysrgb   ',
                      id : 4

        },
                              {
                name: 'Starbucks',
                address: 'Block A, Hamilton House, Connaught Place, New Delhi',
                location: 'Connaught Place',
                category: 'CAFÉ',
                vote: '4.1',
                cuisines: 'Cafe',
                cost: '700',
                hours: '7:30 AM to 12:30 AM (Mon-Sun)',
                bestDish: {
                    name: 'Corn Pizza',
                    image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
                },
                image: 'https://images.pexels.com/photos/180066/pexels-photo-180066.jpeg?h=350&auto=compress&cs=tinysrgb',
                      id : 5

        },
                              {
                name: 'Zen',
                address: 'B-25,Pune, New Mumbai',
                location: 'Mumbai',
                category: 'Casual Dining',
                vote: '4.2',
                cuisines: 'Chinese, Japanese, Italian, Seafood',
                cost: '1500',
                hours: '11 AM to 11:30 PM (Mon-Sun)',
                bestDish: {
                    name: 'Corn Pizza',
                    image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
                },
                image: 'https://images.pexels.com/photos/46247/thai-food-noodle-fried-noodles-meal-46247.jpeg?h=350&auto=compress&cs=tinysrgb',
                      id : 6

        },
                              {
                name: 'Johnny Rockets',
                address: 'S-14,2nd Floor, Select Citywalk Mall, Saket, New Delhi',
                location: 'Select Citywalk Mall, Saket',
                category: 'Casual Dining',
                vote: '3.9',
                cuisines: 'Fast Food, American, Burger',
                cost: '900',
                hours: '11 AM to 11 PM (Mon-Sun)',
                bestDish: {
                    name: 'Corn Pizza',
                    image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
                },
                image: ' https://images.pexels.com/photos/496580/pexels-photo-496580.jpeg?h=350&auto=compress&cs=tinysrgb',
                      id : 7

        }]
	$scope.restaurant = restaurants[$routeParams.id - 1];
 
    
	$scope.getIngredients = function(url) {
	// Do something
	var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
	    $http({
	        'method': 'POST',
	        'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
	        'headers': {
	            'Authorization': 'Key f3c1abe985594b70b378874adc2b8c42',
	            'Content-Type': 'application/json'
	        },
	        'data': data,
	       /* success: function (response) {
	           // console.log(response.outputs[0]);
				var ingredients = response.outputs[0].data.concepts;
	            var list = '';
	            for (var i =0;i < ingredients.length;i++) {
	                list += '<div class="ingredient">' + ingredients[i].name + '</div>'
	            }
	           // $('.ingredients').html(list);
	        },
	        error: function (xhr) {
	           // console.log(xhr);
	        } */
	    }).then(function (response) {
								var ingredients = response.data.outputs[0].data.concepts;
						for (var i =0;i < ingredients.length;i++) {
						$scope.ingredients.push(ingredients[i].name);
						}
    		// $('.ingredients').html(list);
    	//	console.log(list);
        }, function (xhr) {
        	console.log(xhr);
        })
	}  
    
});

// --------------------------------------------------  restaurant controller end -----------------------------------



//  --------------------------------------------------  fav controller start ---------------------------------------
foodieApp.controller('favController',function($scope,$location,$http) {


	$scope.ingredients = [];

//console.log($routeParams.id);

  $scope.restaurants = [{
							id: 1,
							bestDish: {
										name: 'Bean Salad',
										image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
									},
							image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
						},{

						id: 2,
						bestDish: {
									name: 'Corn Pizza',
									image: 'https://images.food52.com/zyrGNL1_8ZxmJ43jtBLQoyLfNvA=/753x502/c947f605-2d61-4a10-9f69-abc7dda9fffb--DSC07406.JPG'
								},

            image: 'https://images.food52.com/zyrGNL1_8ZxmJ43jtBLQoyLfNvA=/753x502/c947f605-2d61-4a10-9f69-abc7dda9fffb--DSC07406.JPG'
          },
          {
								id: 3,
								bestDish: {
											name: 'Italian Pasta',
											image: 'https://www.sensibus.com/deli/sites/sensibus.com/files/recipes/pasta-dish-2_0.jpg'
										},

                image: 'https://www.sensibus.com/deli/sites/sensibus.com/files/recipes/pasta-dish-2_0.jpg'
              },
              {

										id: 4,
										bestDish: {
													name: 'Grilled fish',
													image: 'https://thumbs.dreamstime.com/z/grilled-fish-served-potatoes-sauce-lemon-close-up-29801081.jpg'
												},

                    image: 'https://thumbs.dreamstime.com/z/grilled-fish-served-potatoes-sauce-lemon-close-up-29801081.jpg'
                    }]



						$scope.lists1 = [
						{'vl' : 'vegetable'},
						{'vl' : 'almond'},
						{'vl' : 'corn'},
						{'vl' : 'milk'},
						{'vl' : 'apple'},
					];
					$scope.lst1 = [];
					$scope.change1 = function(check,value){
								if(check){
										$scope.lst1.push(value);
								}else{
										 $scope.lst1.splice($scope.lst1.indexOf(value), 1);
								}
					};

					//
					$scope.lists2 = [
					{'vl' : 'meat'},
					{'vl' : 'egg'},
					{'vl' : 'onion'},
					{'vl' : 'lettuce'},
					{'vl' : 'banana'},
					];
					$scope.lst2 = [];
					$scope.change2 = function(check,value){
							if(check){
									$scope.lst2.push(value);
							}else{
									 $scope.lst2.splice($scope.lst2.indexOf(value), 1);
							}
					};


								$scope.getFav = function(url) {
						var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
										$http({
											'method': 'POST',
											'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
											'headers': {
												'Authorization': 'Key a83cf33d81ca4f71ae7f18345e7b8ab0',
												'Content-Type': 'application/json'
											},
											'data': data,

										}).then(function (response) {
													var ingredients = response.data.outputs[0].data.concepts;
										  			var list = '';
														//  var cboxArray = [];
														for (var i =0;i < ingredients.length;i++) {
															$scope.ingredients.push(ingredients[i].name);
														}

														for(var i=0;i< $scope.lst1.length;i++){
													if ($scope.ingredients.indexOf($scope.lst1[i]) > -1) {

																if($scope.ingredients.indexOf($scope.lst2[i]) > -1){
																	// var info1 = "<h2 class='highlight-info'>You will not like this Food</h2>";
																  console.log("Not Your FAV");
																	$(".highlight-info").text('You will not like this Food');
																		 $(".rest-extra").css("background-color" ,"#ea0b0b");

																					break;
																}
																// var info2 = "<h2 class='highlight-info'>This is the food You May LIKE</h2>";
																console.log("Your FAV");
																$(".highlight-info").text('This is the food You May LIKE');
																	$(".rest-extra").css("background-color" ,"#308917");
																break;
															 }

															 else {
																//  var info1 = "<h2 class='highlight-info'>You will not like this Food</h2>";
																 console.log("Not Your FAV");
																	$(".highlight-info").text('You will not like this Food');
																	$(".rest-extra").css("background-color" ,"#ea0b0b");

															 }

									}


											//console.log(list);
										}, function (xhr) {
																	   console.log(xhr);
																	  });
																}




})












// -----------------------------------------------------------------------------------------------------------------



    
    foodieApp.controller('mainController',function($scope){
        $scope.ingredients = [];
        $scope.restaurants = [{
                name: 'Farzi Cafe',
                address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
                location: 'Connaught Place',
                category: 'Casual Dining, Bar',
                vote: '4.2',
                cuisines: 'Modern Indian',
                cost: '2200',
                hours: '12 Noon to 1 AM (Mon-Sun)',
                bestDish: {
                    name: 'Corn Pizza',
                    image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
                },
                image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg',
              id : 1
        },
                {
                name: 'Flying Kukkad',
                address: '38/39, Level 1, Gurgaon',
                location: 'Connaught Place',
                category: 'Casual Dining, Bar',
                vote: '4.2',
                cuisines: 'North Indian, Continental, Lebanese',
                cost: '600',
                hours: '12 Noon to 1 AM (Mon-Sun)',
                bestDish: {
                    name: 'Corn Pizza',
                    image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
                },
                image: 'https://thumb7.shutterstock.com/display_pic_with_logo/288100/184074431/stock-photo-marinated-grilled-healthy-chicken-breasts-cooked-on-a-summer-bbq-and-served-with-fresh-herbs-and-184074431.jpg',
                     id : 2

        },
            {
                name: 'The Big Chill Cakery',
                address: 'Main Market, Khan Market, New Delhi',
                location: 'Khan Market',
                category: 'BAKERY,DESSERT PARLOR',
                vote: '4.3',
                cuisines: 'Bakery, Desserts',
                cost: '700',
                hours: '8 AM to 12 Midnight (Mon-Sun)',
                 bestDish: {
                    name: 'Corn Pizza',
                    image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
                },
                image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?h=350&auto=compress&cs=tinysrgb',
                      id : 3

        },
                              {
                name: 'Dominos Pizza',
                address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
                location: 'Connaught Place',
                category: 'QUICK BITES',
                vote: '3.5',
                cuisines: 'Pizza, Fast Food',
                cost: '600',
                hours: '11 AM to 11 PM (Mon-Sun)',
                bestDish: {
                    name: 'Corn Pizza',
                    image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
                },
                image: 'https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?h=350&auto=compress&cs=tinysrgb   ',
                      id : 4

        },
                              {
                name: 'Starbucks',
                address: 'Block A, Hamilton House, Connaught Place, New Delhi',
                location: 'Connaught Place',
                category: 'CAFÉ',
                vote: '4.1',
                cuisines: 'Cafe',
                cost: '700',
                hours: '7:30 AM to 12:30 AM (Mon-Sun)',
                bestDish: {
                    name: 'Corn Pizza',
                    image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
                },
                image: 'https://images.pexels.com/photos/180066/pexels-photo-180066.jpeg?h=350&auto=compress&cs=tinysrgb',
                      id : 5

        },
                              {
                name: 'Zen',
                address: 'B-25,Pune, New Mumbai',
                location: 'Mumbai',
                category: 'Casual Dining',
                vote: '4.2',
                cuisines: 'Chinese, Japanese, Italian, Seafood',
                cost: '1500',
                hours: '11 AM to 11:30 PM (Mon-Sun)',
                bestDish: {
                    name: 'Corn Pizza',
                    image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
                },
                image: 'https://images.pexels.com/photos/46247/thai-food-noodle-fried-noodles-meal-46247.jpeg?h=350&auto=compress&cs=tinysrgb',
                      id : 6

        },
                              {
                name: 'Johnny Rockets',
                address: 'S-14,2nd Floor, Select Citywalk Mall, Saket, New Delhi',
                location: 'Select Citywalk Mall, Saket',
                category: 'Casual Dining',
                vote: '3.9',
                cuisines: 'Fast Food, American, Burger',
                cost: '900',
                hours: '11 AM to 11 PM (Mon-Sun)',
                bestDish: {
                    name: 'Corn Pizza',
                    image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
                },
                image: ' https://images.pexels.com/photos/496580/pexels-photo-496580.jpeg?h=350&auto=compress&cs=tinysrgb',
                      id : 7

        }];
    
    });
 

 