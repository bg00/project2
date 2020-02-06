const render = function() {
    return `
<!DOCTYPE html>
<!--[if IE 9]><html class="lt-ie10" lang="en" > <![endif]-->
<html class="no-js" lang="en">

<head>
    <meta charset="utf-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Foundation 5</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.3/css/normalize.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.3/css/foundation.min.css">
    <link href='https://cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/foundation-icons.css' rel='stylesheet'
        type='text/css'>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
    <link rel="stylesheet" href="/style.css">

</head>

<body>
    <div class="column">
        <div class="row">
            <div class="large-3 columns">
                <h1><img src="/images/logo.png"></h1>
            </div>
        </div>


        <div class="large-9 push-3 columns">
            <div class="featured-image-block-grid-header">
                <h2>Photos</h2>
                <p>Check back often for new photos of runners who track their progress on Fitness with Friends!</p>
            </div>

            <div class="masonry-css">
                <div class="masonry-css-item">
                </div>
                <div class="masonry-css-text">
                    <div class="callout">
                        All photos are provided by <a href="https://www.flickr.com/search/?text=runners">Flickr.</a>
                        If you're interested in more info, please contact the photographers through their accounts.
                    </div>
                </div>
            </div>
        </div>


        <div class="large-3 pull-9 columns">
            <ul class="side-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">Progress</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Pics</a></li>
            </ul>
            <p><img src="/images/runners.jpg"></a></p>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.3/js/foundation.min.js"></script>
    <script>
        $(document).foundation();
    </script>
    <script src="/script.js"></script>
</body>

</html> `
}