const render = function render(body) {
  return `<!DOCTYPE html>
  <html>
  
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Fitness With Friends</title>
  <link rel="stylesheet" type="text/css" href="/assets/css/styles.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.3/css/normalize.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.3/css/foundation.min.css">
  <link href='https://cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/foundation-icons.css' rel='stylesheet' type='text/css'>
  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
  <link href="https://fonts.googleapis.com/css?family=Playfair+Display&display=swap" rel="stylesheet">

  <script src="https://code.jquery.com/jquery.js"></script>
  <script src="/assets/js/signin.js"></script>
  <script src="/assets/js/register.js"></script>
  <script src="/assets/js/home.js"></script>
  

  </head>
  
  <body>
    ${body}
  </body>
  
  </html>`
}
exports.render = render;