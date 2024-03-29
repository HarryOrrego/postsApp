<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="./../assets/css/app.css">
    <title>Post App</title>
  </head>
  <body>
    <div class="container">

    <div id="loader" style="display:none"></div>

    <div class="header">
        <h1>POST APP</h1>
    </div>

    <div class="body">
      <!-- render -->

      <?php 
        //TODO: Fix this
        HandleView('index');
        function HandleView($view){
          include 'views/'.$view.'.php';          

        }   

      ?>

    </div>

    </div>
    <script
  src="https://code.jquery.com/jquery-3.4.1.js"
  integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
  crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="../assets/js/models/User.js"></script>
    <script src="../assets/js/modules/utilities.js"></script>
    <script src="../assets/js/modules/comunication.js"></script>
    <script src="../assets/js/app.js"></script>
  
  </body>
</html>