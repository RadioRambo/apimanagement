# apimanagement

`/` gives you all the 100 users list

`/search/?searchqueries` 

Below are the available search queries

`id=x` to get the user details with id = `x`

`firstname=xyz` to get the user details with firstname = `xyz`

`lastname=xyz` to get the user details with lastname = `xyz`

`gender=Male` to get the user details with gender = `Male`

`gender=Female` to get the user details with gender = `Female`

You can also combine the search queries together for combinined user details satisfying either condition

`/?id=1&firstname=Dora` or `/?id=1&firstname=Dora&gender=Male` 

.
.
.
.
.

This project contains data of 100 dummy users details of id, firstname, lastname, email, gender and ip address and hosted on Posgresql server which is connect to nodejs using npm package pg. And for the api url paths and search queries are implemented using ExpressJS. And Azure API management service is used to ratelimit(limit api calls per minute), generate subscription keys to authenticate and keep count of api usage. 

Simply this is a mini replication of real life production used API project.

Tools Used: Azure Api management services, ExpressJS, PostgreSQL, Docker, NodeJS.
