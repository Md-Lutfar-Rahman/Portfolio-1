<nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
            <a href="/" class="d-block">
                    MIST Ltd.
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav me-auto">
                    <li class="active">
                            <a href="{{ url('/') }}" class="nav-link text-left">Home</a>
                        </li>
                        <li>
                            <a href="{{ url('/about') }}" class="nav-link text-left">About Us</a>
                        </li>
                        <li class="has-children">
                            <a href="#" class="nav-link text-left">Administration</a>
                            <ul class="dropdown">
                                <li><a href="{{ url('/bod') }}">BOD</a></li>
                                <li><a href="{{ url('/management') }}">Management</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="{{ url('/admission') }}" class="nav-link text-left">Admissions</a>
                        </li>
                        <li class="has-children">
                            <a href="#" class="nav-link text-left">Academic</a>
                            <ul class="dropdown">
                                <li><a href="{{ url('/notice') }}">Academic Notice</a></li>
                                <li><a href="{{ url('/teachers') }}">Teachers Info</a></li>
                                <li><a href="{{ url('/gallery') }}">Academic Gallery</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="{{ url('/courses') }}" class="nav-link text-left">Courses</a>
                        </li>
                        <li>
                            <a href="{{ url('/contact') }}" class="nav-link text-left">Contact</a>
                        </li>
                        <li>
                            <a href="{{ url('/notice') }}" class="nav-link text-left">Notice</a>
                        </li>
                    </ul>

                    
                </div>
            </div>
        </nav> 