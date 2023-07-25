
## Getting Started

  <B>Intialy I started the Project with </B>
  -     Creating a new Folder in local
  -     npx create-next-app@latest ./
  -     Once completed the structure , I add few Plugin

## Plugins

1.   <B>bcrypt </B> : this is used for hash changing to the password

2.  <B>mongodb </B> : Maintianing our database

3. <B>mongoose </B>  : It's going to help managing the mongodb datas

4. next-auth


## Components

<B>Components</B> - It's is used for store the resuable components and make easy to  import another and usecsae

## use client

1. where the place use client?
* use client can be used in where we can use <B>useSatate, useEffect</B> use react hooks in the file

## Provider
  * Provider can use for authentication for this project using a SessionProvider , these things are usefull for creating BackEnd 
  and create a New Project in  [console.cloude.google](https://console.cloud.google.com/apis/dashboard) and get copy google_id and google_secreate_id and share in .env file

##  Database

  Create database in <B> Utils </B> folder , inside the folder create database file 

  Here we can give connection for moongose

  Here this file write a connection for mongoDB database through the mongoose 
   
  * Create a acoount in mongoDB atlas 
  * Create project with cluster in atlas
  * Create project and network setting
  * Once created the database and check connect button it will show drive option
  * copy the connection link for monogDB
  * In .env file paste the link and inside the link add password 

  Reference through the [Nextauth](https://next-auth.js.org/getting-started/example). Documentation


    