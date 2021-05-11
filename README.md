ROS.org Website
===============

This is a static site built using Nanoc running in Docker.

Quickstart
----------

Requires `docker-compose`.

```
$ docker-compose build
$ docker-compose up
```

Browse to http://localhost:3000 to see the site. Changes you make to the content
and layouts are automatically reloaded via a websocket on port 35729. The
generated static site files will appear in `output` directory.
