FROM halverneus/static-file-server:v1.5.0

ADD ./src /web
EXPOSE 8080
