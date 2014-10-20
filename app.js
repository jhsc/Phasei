(function() {
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller("PanelController", function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		}
	});

	var gems = [
		{
			name: 'Test',
			price: 2.34,
			description: 'klahsdjla alkjdk aslkfjl sdflsdvl.',
			canPurchase:  true,
			soldOut: true,
			images: [
				{
					full: 'img/ruby-red.jpg'
				}
			]
		},
		{
			name: 'Test',
			price: 2.34,
			description: 'klahsdjla alkjdk aslkfjl sdflsdvl.',
			canPurchase:  false,
			soldOut: true
		},
		{
			name: 'Test',
			price: 5345,
			description: 'klahsdjla alkjdk aslkfjl sdflsdvl.',
			canPurchase:  true,
			soldOut: true
		},
		{
			name: 'Test',
			price: 1.20,
			description: 'klahsdjla alkjdk aslkfjl sdflsdvl.',
			canPurchase:  false,
			soldOut: true
		},
		{
			name: 'Test',
			price: 2.34,
			description: 'klahsdjla alkjdk aslkfjl sdflsdvl.',
			canPurchase:  true,
			soldOut: true
		}
	];
})();
