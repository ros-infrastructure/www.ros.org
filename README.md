# ROS.org Website

This is a static site built using Nanoc running in Docker.

## Quickstart

Requires `docker-compose`.

```
$ docker compose build
$ docker compose up
```

Browse to http://localhost:3000 to see the site. Changes you make to the content
and layouts are automatically reloaded via a websocket on port 35729. The
generated static site files will appear in `output` directory.


## Docker Compose Upgrade

If you get an error like, `kwargs = kwargs_from_env(environment=environment, ssl_version=tls_version)` it may be related to docker-compose versions. [See this link](https://docs.docker.com/compose/releases/migrate/). On gLinux I had to [upgrade manually.](https://docs.docker.com/compose/install/linux/#install-the-plugin-manually)


## Local Development Setup

``` shell
sudo apt install ruby
sudo gem install bundler 0v 2.3.26
bundle install
ruby Rakefile
```

Commands can be run as:

``` shell
rake new_post["My Post Name"]

```
New post will be created in `./blog/YYYY-MM-DD-My-Post-Name`


## Directions from Developer


```
web rake new_post
web rake new_post['A clever blog post title']
```

Generate a new blog post using the rake task above. It lands in the `blog`
directory. Giving the rake task a string for the argument sets the post's title.

```
web rake new_robot
web rake new_robot['R2-D2']
```

Generate a new blog post using the rake task above. It lands in the `robots`
directory. Giving the rake task a string for an argument sets the robot's title.


# First Time Setup 

Make sure Docker / Docker Compose are installed and have the correct permissions. Add docker to your user group by replacing `$USER` to your username.

```
sudo usermod -aG docker $USER
newgrp docker

```

Now, you need to tell the upload script where to look for the SSH key file for the ros.org host. To do this edit:  `~/.ssh/config` and add the following. 

``` 
Host ros1.osuosl.org osuoslros
     User ros
     HostName ros2.osuosl.org
     ForwardAgent yes
     ServerAliveInterval 30
     ServerAliveCountMax 4
     IdentityFile ~/.ssh/id_rsa    <== your ssh key for the host
     IdentitiesOnly yes
```

Now build the site. 

```
$ docker compose build
```

If you would like to take a look at the website you can run `docker-compose up`. This should launch a local website at the location `localhost:3000`

```
$ docker compose up
```

Finally upload it to the host. 

```
./upload.bash
```


