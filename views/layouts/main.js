const render = function render(body) {
  return `<!DOCTYPE html>
  <html>
  
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="/styles/styles.css" media="screen" title="no title" charset="utf-8">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.3/css/normalize.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.3/css/foundation.min.css">
    <link href='https://cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/foundation-icons.css' rel='stylesheet' type='text/css'>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
    <title>Home Page</title>
  </head>
  
  <body>
    ${body}
  </body>
  
  </html>`
}
exports.render = render;