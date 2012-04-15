Lojo
====

Lojo is a web application that Lojo-izes your images by adding a sombrero to
each image. Lojo was inspired by a typo, and brought to life by HTML 5.

Quick Start
-----------

Lojo is a purely client-side web application, so hosting the application is as
simple as opening `index.html` in a supported web browser.

Favicon Functionality
---------------------

For full functionality, it seems that the file must be served through a web
server. This issue is related to the `favicon.ico` file, which is required by
the Tinycon.js library that displays notifications in the favicon. This does
not affect any other functionality. Nevertheless, for the full experience,
please use a web server, even one as simple as:

    cd /path/to/lojo
    python -m SimpleHTTPServer

Required Browser Features
-------------------------

Lojo requires a web browser that supports HTML 5 Drag and Drop functionality,
as well as the FileReader API.

Examples of Lojo-ized Images
----------------------------

![](http://github.com/avik-das/lojo/raw/master/test-images/magritte.jpg)
![](http://github.com/avik-das/lojo/raw/master/test-images/magritte-lojoized.png)

-------------------------------------------------------------------------------

![](http://github.com/avik-das/lojo/raw/master/test-images/mona-lisa.jpg)
![](http://github.com/avik-das/lojo/raw/master/test-images/mona-lisa-lojoized.png)

-------------------------------------------------------------------------------

![](http://github.com/avik-das/lojo/raw/master/test-images/sinatra-logo.png)
![](http://github.com/avik-das/lojo/raw/master/test-images/sinatra-logo-lojoized.png)

-------------------------------------------------------------------------------

![](http://github.com/avik-das/lojo/raw/master/test-images/sombrero.png)
![](http://github.com/avik-das/lojo/raw/master/test-images/sombrero-lojoized.png)
