//IFFE Function
(function () {
    angular.module('Home', []);
    angular.module('About', []);
    angular.module('Posts', []);
    angular.module('Contact', []);
    angular.module('BredditStarter', [
        'Home',
        'About,
        'Contact',
        'Posts',
        'ui.router'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
        $urlRouterProvider.otherwise("/home");
        $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "app/states/home/home.html",
            controller: "Home"
        })
        .state('about', {
            url: "/about", 
            templateUrl: "app/states/about/about.html",
            controller: "About"
        })
        .state('posts', {
            url: "/posts",
            templateUrl: "app/states/posts/posts.html",
            controller: "Posts"
        })
        .state('contact', {
            url: "/contact",
            templateUrl: "app/states/contact/contact.html",
            controller: "Contact"
        })
    });
}());