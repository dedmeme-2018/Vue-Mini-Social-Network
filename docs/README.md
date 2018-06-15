<!-- Logo -->
<p align="center">
  <a href="https://github.com/dedmeme-2018/SpeakEasy">
    <img height="128" width="128" src="https://raw.githubusercontent.com/dedmeme-2018/SpeakEasy/master/logo.png">
  </a>
</p>
<!-- Name -->
<h1 align="center">
  <a href="https://github.com/dedmeme-2018/SpeakEasy">SpeakEasy</a>
   :rocket:<span style="font-variant-caps: petite-caps;font-size: 20px;font-weight: 400;">Version 1.1 by <img height="20px" src="https://raw.githubusercontent.com/dedmeme-2018/SpeakEasy/master/dmmlogo.png"/></span>:rocket:
</h3>

  </h1>
  
[![Build Status](https://travis-ci.org/dedmeme-2018/SpeakEasy.svg?branch=master)](https://travis-ci.org/dedmeme-2018/SpeakEasy)


# SpeakEasy
<!-- Quick Intro -->
SpeakEasy is a web application relying on [Vue](https://vuejs.org/v2/guide/index.html) a javascript library for building the user interface. If you are not familiar with Vue, here are two resources that you can check out. [Official Docs](https://vuejs.org/v2/guide/installation.html#Vue-Devtools) and [Quick Intro](https://medium.com/codingthesmartway-com-blog/vue-js-2-quickstart-tutorial-2017-246195cfbdd2).

# Usage
1. <b>First install all dependencies. Make sure you have Node.js & npm on your machine:</b>
    - Node: https://nodejs.org/en/download/current/ 
    - npm: https://www.npmjs.com/get-npm

    ```bash
    # with npm
    npm install
    ```

After we install dependencies, we set up the MySQL database.

2.  <b>For <i>Windows</i>, Install PhpMyAdmin, import db.sql in repository.</b>

3. <b>For <i>MacOS</i></b>,
   - [Install MySql](https://dev.mysql.com/downloads/mysql/) and run the MySql server. Remember your password for 'root' 
   - Install the mysql cli using `brew install mysql`
   - Import the database from db.sql. You can run the command whenever you want to reset the database
      ```bash
      $ mysql -u username -p < db.sql
      $ mysql -u username -p
      mysql> SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));
      ```


4. <b>Create a `.env` file and insert the following code. Replace values with yours!!</b>

```javascript
    PORT=[YOUR_PORT]
    MYSQL_HOST="localhost"
    MYSQL_USER="root"
    MYSQL_PASSWORD=[YOUR_PASSWORD]
    MYSQL_DATABASE="peterbook"
    SESSION_SECRET_LETTER=[ANYTHING_SECRET]
```

  - Example `.env` file would looks like:

```javascript
    PORT=3000
    MYSQL_HOST=localhost
    MYSQL_USER=root
    MYSQL_PASSWORD=pswd
    MYSQL_DATABASE=peterbook
    SESSION_SECRET_LETTER=secret_letter
```


5. <b>Start the server</b>
    ```javascript
    npm start
    ```

6. <b>Now open the app in browser by entering</b> 
    ```javacript
    localhost:[PORT]
    ```

7. <b>Enjoy!!</b>

# Common Issues
1. ER_MIX_OF_GROUP_FUNC_AND_FIELDS:
    It is related to your SQL_MODE. Run following in your mysql:
    ```bash
      mysql> SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));
    ```

### Development Guidelines
- Create a branch for each new feature (never push to master)
- Have reasonable comments in your code
- Always create a pull request once you're done with your feature
- Assign a team member to code review and merge the pull request once it's approved
- Once we get testing and other pipeline features back in update this with how to use them properly

### Updating Documentation
Refer to [docsify documentation](https://docsify.js.org/#/) for more details.

1. Create Markdown file (.md) in project ./docs folder 

1. Format however desired using [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) 

1. To add page to sidebar modify ./docs/_sidebar.md and include your page

### Built With

  * [Vue Mini Social Network](https://github.com/yTakkar/Vue-Mini-Social-Network) A reactive mini-social-network created with Vue!!
  * [Keen UI](https://github.com/JosephusPaye/Keen-UI) A lightweight collection of essential UI components written with Vue and inspired by Material Design.
  * [docsify](https://docsify.js.org/#/) A magical documentation site generator.

