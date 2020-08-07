<!doctype html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{asset('site/css/style.css')}}">
    <link rel="stylesheet" href="{{asset('site/bootstrap.css')}}">
    <link rel="stylesheet" href="{{asset('icofont/icofont.min.css')}}">
    <link rel="apple-touch-icon" sizes="180x180" href="{{asset('flaticon/apple-touch-icon.png')}}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{asset('flaticon/favicon-32x32.png')}}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{asset('flaticon/favicon-16x16.png')}}">
    <link rel="manifest" href="{{asset('flaticon/site.webmanifest')}}">
    <link rel="mask-icon" href="{{asset('flaticon//safari-pinned-tab.svg')}}" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
    <title>Password Generator</title>
</head>
<body>

<nav class="navbar navbar-expand-lg navbar-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse align-items-center justify-content-center" id="navbarNav">
        <a class="navbar-brand" href="{{route('home')}}" style="width: 15%"><img src="{{asset('site/img/logo.png')}}" width="100%"></a>
        <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="{{route('home')}}">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{route('about')}}">Sobre</a>
            </li>
        </ul>
    </div>
</nav>

@yield('content')

<div class="bottom text-center">
    <h1>Developed by MainCode</h1>
    <a href="https://pt-br.facebook.com/" class="decoration" target="_blank"><i class="icofont-small icofont-facebook"></i></a>
    <a href="https://twitter.com/" class="decoration" target="_blank"><i class="icofont-small icofont-twitter"></i></a>
    <a href="https://www.instagram.com/?hl=pt-br" class="decoration" target="_blank"><i class="icofont-small icofont-instagram"></i></a>
</div>

<!--JQuery -->
<script src="{{asset('site/jquery.js')}}" > </script>
<!-- Bootstrap script -->
<script src="{{asset('site/bootstrap.js')}}"></script>
<!-- Script -->
<script src="{{asset('site/js/script.js')}}"></script>

</body>
</html>
