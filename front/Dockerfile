FROM httpd:2.4

# RUN apt install libapache2-mod-wsgi-py3
# RUN apt-get update
# RUN apt-get install libapache2-mod-wsgi-py3

COPY . /usr/local/apache2/htdocs/
RUN apt-get update
RUN apt-get -y install libapache2-mod-wsgi-py3
# VOLUME /folder:/usr/local/apache2/htdocs/

