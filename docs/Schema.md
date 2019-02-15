Schema

## Users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null
age             | integer   | not null
gender          | string    | not null
language        | string    | not null
country         | string    | not null

*user has a profile, many boards, many pins

## Boards
column name     | data type | details
----------------|-----------|-----------------------
user_id         | integer   | not null, foreign key
description     | string    | not null, foreign key
name            | string    | not null 


*Boards belong to a user*

## Pins
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key
board_id        | integer   | not null, foreign key
description     | string    | not null 


## Tags
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key


## Taggings
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
post_id         | integer   | not null, foreign key
tag_id          | integer   | not null, foreign key

