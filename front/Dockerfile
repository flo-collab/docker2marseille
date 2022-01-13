FROM httpd:2.4


COPY . /usr/local/apache2/htdocs/
RUN apt-get update
RUN apt-get -y install libapache2-mod-wsgi-py3


# EXPOSE 8080 443