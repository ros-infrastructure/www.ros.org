FROM ruby:3.0

WORKDIR /usr/src/ros
ADD Gemfile* ./
RUN bundle install
