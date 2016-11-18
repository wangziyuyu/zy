'use strict';

/**
 * @ngdoc overview
 * @name twoApp
 * @description
 * # twoApp
 *
 * Main module of the application.
 */
angular
  .module('aaaaApp', ['wzy'])
  .controller('cont',function($scope,$http){
  	$http({
			method:'get',
			url:'http://www.somenote.cn:1510/test'
		}).success(function(e){
			$scope.medata=e;
		})
  })
  
