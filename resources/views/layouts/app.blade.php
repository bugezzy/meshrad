<html>
<head>
    <title>Meshrad - @yield('title')</title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    @vite('resources/css/app.css')
    @vite('resources/scss/app.scss')
    @vite('resources/fontawesome/scss/fontawesome.scss')
    @vite('resources/fontawesome/scss/solid.scss')
    @vite('resources/fontawesome/scss/regular.scss')
    @vite('resources/fontawesome/scss/brands.scss')

    @vite('resources/js/app.js')

    @stack('scripts')
</head>
<body>

@stack('body')

@include('layouts/nav')

<div class="wrapper d-flex flex-column min-vh-100">
    @include('layouts/header')

    <div class="body flex-grow-1">
        <div class="container-lg px-4">
            @yield('content')
        </div>
    </div>


    @include('layouts/footer')
</div>
</body>
</html>
