'use strict';

/**
 * @ngdoc overview
 * @name weatherApp
 * @description
 * # weatherApp
 *
 * Main module of the application.
 */
// var weatherApp = angular
// 	.module('weatherApp', [])
// 	.controller(
// 		'weather',
// 		function ($scope, $http) {
//
//
//
// 		});

var weatherApp = angular.module('weatherApp', []);
weatherApp.controller('weather', function($scope, $http) {
    $http.get("http://api.wunderground.com/api/8f155bcfa95f73ae/conditions/q/OH/Cleveland.json")
        .then(function (response) {
            console.log(response.data);
            var city_name = response.data.current_observation.display_location.city;
            var state_name = response.data.current_observation.display_location.state_name;
            var temperature = response.data.current_observation.temp_f;
            var feels_like = response.data.current_observation.feelslike_f;
            var icon = response.data.current_observation.icon;
            var wind = response.data.current_observation.wind_mph;
            var icon_url = response.data.current_observation.icon_url;

            var xx = {
                city: city_name,
                name: state_name,
                temp: temperature,
                feels_like: feels_like,
                icon: icon,
                wind: wind,
                icon_url: icon_url
            };
            console.log(xx);
            $scope.weather1 = xx;


        })

    $http.get("http://api.wunderground.com/api/8f155bcfa95f73ae/conditions/q/CA/San_Francisco.json")
        .then(function(response) {
            console.log(response.data);
            var city_name = response.data.current_observation.display_location.city;
            var state_name = response.data.current_observation.display_location.state_name;
            var temperature = response.data.current_observation.temp_f;
            var feels_like = response.data.current_observation.feelslike_f;
            var icon = response.data.current_observation.icon;
            var wind = response.data.current_observation.wind_mph;
            var icon_url = response.data.current_observation.icon_url;

            var xx = {
                city: city_name,
                name: state_name,
                temp: temperature,
                feels_like: feels_like,
                icon: icon,
                wind: wind,
                icon_url: icon_url
            };
            console.log(xx);
            $scope.weather2 = xx;
        });

    $http.get("http://api.wunderground.com/api/8f155bcfa95f73ae/conditions/q/AR/Jonesboro.json")
        .then(function(response) {
            console.log(response.data);
            var city_name = response.data.current_observation.display_location.city;
            var state_name = response.data.current_observation.display_location.state_name;
            var temperature = response.data.current_observation.temp_f;
            var feels_like = response.data.current_observation.feelslike_f;
            var icon = response.data.current_observation.icon;
            var wind = response.data.current_observation.wind_mph;
            var icon_url = response.data.current_observation.icon_url;

            var xx = {
                city: city_name,
                name: state_name,
                temp: temperature,
                feels_like: feels_like,
                icon: icon,
                wind: wind,
                icon_url: icon_url
            };
            console.log(xx);
            $scope.weather3 = xx;
        });

    $http.get("http://api.wunderground.com/api/8f155bcfa95f73ae/conditions/q/TN/Memphis.json")
        .then(function(response) {
            console.log(response.data);
            var city_name = response.data.current_observation.display_location.city;
            var state_name = response.data.current_observation.display_location.state_name;
            var temperature = response.data.current_observation.temp_f;
            var feels_like = response.data.current_observation.feelslike_f;
            var icon = response.data.current_observation.icon;
            var wind = response.data.current_observation.wind_mph;
            var icon_url = response.data.current_observation.icon_url;

            var xx = {
                city: city_name,
                name: state_name,
                temp: temperature,
                feels_like: feels_like,
                icon: icon,
                wind: wind,
                icon_url: icon_url
            };
            console.log(xx);
            $scope.weather4 = xx;
        });


    // $scope.forecasts = ['San_Francisco'];
    // $scope.area = ['CA']
    $scope.showResults = false;
    $scope.captureEnter = function (e, onEnter) {
        if (e.which === 13) {
            onEnter();
        }
    }

    function errorCallback(response) {
        $scope.showResults = false;
        $scope.errorMessage = "Unexpected Error";
    }
    function showError() {
        $scope.showResults = false;
        $scope.errorMessage = response.data.response.error.description;
    }


    $scope.setForecast = function () {
        $http({
            method: 'GET',
            url: 'http://api.wunderground.com/api/8f155bcfa95f73ae/conditions/q/OH/Cleveland' + ".json",

        }).then(function successCallback(response) {
//console.log(response.data.current_observation);
            if (response.data.current_observation) {

                var location = response.data.current_observation.display_location.full;
                //  console.log(location);
                $http({
                    method: 'GET',
                    url: 'http://api.wunderground.com/api/8f155bcfa95f73ae/forecast10day/q/OH/Cleveland' + ".json",
                }).then(function successCallback(response) {
                    //     console.log(response.data);
                    if (response.data.forecast) {
                        $scope.showResults = true;
                        $scope.errorMessage = "";
                        var forecast = [];
                        for (var i = 0; i < 10; i++) {
                            var day = response.data.forecast.simpleforecast.forecastday[i];
                            forecast[i] = {
                                city: location,
                                name: i == 0 ? "Today" : day.date.weekday,
                                icon_url: day.icon_url,
                                isFirst: i == 0,
                                temperature: day.high.fahrenheit,
                                description: i == 0 ? day.conditions : ""
                            }
                        }

                        $scope.nn = forecast;

                    } else {
                        showError();
                    }

                }, errorCallback);
            } else {
                showError();
            }
        }, errorCallback);




        $http({
            method: 'GET',
            url: 'http://api.wunderground.com/api/8f155bcfa95f73ae/conditions/q/CA/San_Francisco' + ".json",

        }).then(function successCallback(response) {
//console.log(response.data.current_observation);
            if (response.data.current_observation) {

                var location = response.data.current_observation.display_location.full;
                //  console.log(location);
                $http({
                    method: 'GET',
                    url: 'http://api.wunderground.com/api/8f155bcfa95f73ae/forecast10day/q/CA/San_Francisco' + ".json",
                }).then(function successCallback(response) {
                    //     console.log(response.data);
                    if (response.data.forecast) {
                        $scope.showResults = true;
                        $scope.errorMessage = "";
                        var forecast = [];
                        for (var i = 0; i < 10; i++) {
                            var day = response.data.forecast.simpleforecast.forecastday[i];
                            forecast[i] = {
                                city: location,
                                name: i == 0 ? "Today" : day.date.weekday,
                                icon_url: day.icon_url,
                                isFirst: i == 0,
                                temperature: day.high.fahrenheit,
                                description: i == 0 ? day.conditions : ""
                            }
                        }

                        $scope.nn1 = forecast;

                    } else {
                        showError();
                    }

                }, errorCallback);
            } else {
                showError();
            }
        }, errorCallback);



        $http({
            method: 'GET',
            url: 'http://api.wunderground.com/api/8f155bcfa95f73ae/conditions/q/AR/Jonesboro' + ".json",

        }).then(function successCallback(response) {
//console.log(response.data.current_observation);
            if (response.data.current_observation) {

                var location = response.data.current_observation.display_location.full;
                //  console.log(location);
                $http({
                    method: 'GET',
                    url: 'http://api.wunderground.com/api/8f155bcfa95f73ae/forecast10day/q/AR/Jonesboro' + ".json",
                }).then(function successCallback(response) {
                    //     console.log(response.data);
                    if (response.data.forecast) {
                        $scope.showResults = true;
                        $scope.errorMessage = "";
                        var forecast = [];
                        for (var i = 0; i < 10; i++) {
                            var day = response.data.forecast.simpleforecast.forecastday[i];
                            forecast[i] = {
                                city: location,
                                name: i == 0 ? "Today" : day.date.weekday,
                                icon_url: day.icon_url,
                                isFirst: i == 0,
                                temperature: day.high.fahrenheit,
                                description: i == 0 ? day.conditions : ""
                            }
                        }

                        $scope.nn2 = forecast;

                    } else {
                        showError();
                    }

                }, errorCallback);
            } else {
                showError();
            }
        }, errorCallback);


        $http({
            method: 'GET',
            url: 'http://api.wunderground.com/api/8f155bcfa95f73ae/conditions/q/TN/Memphis' + ".json",

        }).then(function successCallback(response) {
//console.log(response.data.current_observation);
            if (response.data.current_observation) {

                var location = response.data.current_observation.display_location.full;
                //  console.log(location);
                $http({
                    method: 'GET',
                    url: 'http://api.wunderground.com/api/8f155bcfa95f73ae/forecast10day/q/TN/Memphis'+ ".json",
                }).then(function successCallback(response) {
                    //     console.log(response.data);
                    if (response.data.forecast) {
                        $scope.showResults = true;
                        $scope.errorMessage = "";
                        var forecast = [];
                        for (var i = 0; i < 10; i++) {
                            var day = response.data.forecast.simpleforecast.forecastday[i];
                            forecast[i] = {
                                city: location,
                                name: i == 0 ? "Today" : day.date.weekday,
                                icon_url: day.icon_url,
                                isFirst: i == 0,
                                temperature: day.high.fahrenheit,
                                description: i == 0 ? day.conditions : ""
                            }
                        }

                        $scope.nn3 = forecast;

                    } else {
                        showError();
                    }

                }, errorCallback);
            } else {
                showError();
            }
        }, errorCallback);


        // }
    }



})


