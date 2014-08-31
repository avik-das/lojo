Lojo
====

Lojo is a web application that Lojo-izes your images by adding a sombrero to
each image. Lojo was inspired by a typo, and brought to life by HTML 5.

Quick Start
-----------

    git clone git://github.com/avik-das/lojo.git
    cd lojo
    python -m SimpleHTTPServer
    # browse to localhost:8000
    # start dragging and dropping!

or

    git clone git://github.com/avik-das/lojo.git
    cd lojo
    firefox index.html
    # start dragging and dropping!

Favicon Functionality
---------------------

Lojo is a purely client-side web application, so hosting the application is as
simple as opening `index.html` in a supported web browser.

For full functionality, it seems that the file must be served through a web
server. This issue is related to the `favicon.ico` file, which is required by
the Tinycon.js library that displays notifications in the favicon. This does
not affect any other functionality. Nevertheless, for the full experience,
please use a web server, even one as simple as Python's built-in
`SimpleHTTPServer`.

Required Browser Features
-------------------------

Lojo requires a web browser that supports HTML 5 Drag and Drop functionality,
as well as the FileReader API.

Examples of Lojo-ized Images
----------------------------

![](https://raw.githubusercontent.com/avik-das/lojo/master/test-images/magritte.jpg)
![](https://raw.githubusercontent.com/avik-das/lojo/master/test-images/magritte-lojoized.png)

-------------------------------------------------------------------------------

![](https://raw.githubusercontent.com/avik-das/lojo/master/test-images/mona-lisa.jpg)
![](https://raw.githubusercontent.com/avik-das/lojo/master/test-images/mona-lisa-lojoized.png)

-------------------------------------------------------------------------------

![](https://raw.githubusercontent.com/avik-das/lojo/master/test-images/sinatra-logo.png)
![](https://raw.githubusercontent.com/avik-das/lojo/master/test-images/sinatra-logo-lojoized.png)

-------------------------------------------------------------------------------

![](https://raw.githubusercontent.com/avik-das/lojo/master/test-images/sombrero.png)
![](https://raw.githubusercontent.com/avik-das/lojo/master/test-images/sombrero-lojoized.png)
