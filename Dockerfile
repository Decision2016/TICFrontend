FROM nginx
MAINTAINER Decision
RUN rm /etc/nginx/conf.d/default.conf
RUN rm /etc/nginx/nginx.conf
ADD nginx/default.conf /etc/nginx/conf.d/
ADD nginx/nginx.conf /etc/nginx/
COPY dist/ /usr/share/nginx/html/
