<!DOCTYPE html>
    <!--[if IE 9 ]><html class="ie9" ng-app="app"><![endif]-->
    <![if IE 9 ]><html ng-app="app"><![endif]>

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{ $title }}</title>

        <!-- Vendor CSS -->
        <link rel="stylesheet" type="text/css" href="front-end/css/vendor.min.css">

        <!-- CSS -->
        <link href="front-end/css/app.min.1.css" rel="stylesheet" id="app-level">
        <link href="front-end/css/app.min.2.css" rel="stylesheet">
        <link href="front-end/css/demo.css" rel="stylesheet">

    </head>

    <body ng-class="{ 'sw-toggled': true}">

        <div ui-view="index"></div>

        <!-- Older IE warning message -->
        <!--[if lt IE 9]>
            <div class="ie-warning">
                <h1 class="c-white">Warning!!</h1>
                <p>You are using an outdated version of Internet Explorer, please upgrade <br/>to any of the following web browsers to access this website.</p>
                <div class="iew-container">
                    <ul class="iew-download">
                        <li>
                            <a href="http://www.google.com/chrome/">
                                <img src="img/browsers/chrome.png" alt="">
                                <div>Chrome</div>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.mozilla.org/en-US/firefox/new/">
                                <img src="img/browsers/firefox.png" alt="">
                                <div>Firefox</div>
                            </a>
                        </li>
                        <li>
                            <a href="http://www.opera.com">
                                <img src="img/browsers/opera.png" alt="">
                                <div>Opera</div>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.apple.com/safari/">
                                <img src="img/browsers/safari.png" alt="">
                                <div>Safari</div>
                            </a>
                        </li>
                        <li>
                            <a href="http://windows.microsoft.com/en-us/internet-explorer/download-ie">
                                <img src="img/browsers/ie.png" alt="">
                                <div>IE (New)</div>
                            </a>
                        </li>
                    </ul>
                </div>
                <p>Sorry for the inconvenience!</p>
            </div>
        <![endif]-->


        <!-- Core -->
        <script src="front-end/js/vendor.min.js"></script>

        <!-- Placeholder for IE9 -->
        <!--[if IE 9 ]>
            <script src="front-end/vendors/bower_components/jquery-placeholder/jquery.placeholder.min.js"></script>
        <![endif]-->

        <!-- App level -->
        <script src="front-end/js/app.min.js"></script>
    </body>
</html>
