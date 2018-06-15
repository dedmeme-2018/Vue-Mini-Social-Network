<!-- Logo -->
<p align="center">
  <a href="https://github.com/dedmeme-2018/SpeakEasy">
    <img height="128" width="128" src="https://github.com/dedmeme-2018/SpeakEasy/logo.png">
  </a>
</p>
<!-- Name -->
<h1 align="center">
  <a href="https://github.com/dedmeme-2018/SpeakEasy">SpeakEasy</a>:rocket:<span style="font-variant-caps: petite-caps;font-size: 30px;font-weight: 400;"> Version 1.1! </span>:rocket:
</h1>

[![Build Status](https://travis-ci.org/dedmeme-2018/SpeakEasy.svg?branch=master)](https://travis-ci.org/dedmeme-2018/SpeakEasy)

# SpeakEasy
A social network centered around user privacy and security!

# Usage
1. First install all dependencies:
    ```bash
    # with npm
    npm install
    
    # or with yarn
    yarn
    ```
2. For windows, Install PhpMyAdmin, import db.sql.

3. For MacOS,
   - [Install MySql](https://dev.mysql.com/downloads/mysql/) and run the MySql server. Remember your password for 'root' 
   - Install the mysql cli using `brew install mysql`
   - Import the database from db.sql. You can run the command whenever you want to reset the database
      ```bash
      $ mysql -u username -p < db.sql
      ```


4. Create a `.env` file and insert the following code. Replace values with yours!!

    ```javascript
    PORT="YOUR_PORT"
    MYSQL_HOST="localhost"
    MYSQL_USER="root"
    MYSQL_PASSWORD="YOUR_PASSWORD"
    MYSQL_DATABASE="peterbook"
    SESSION_SECRET_LETTER="ANYTHING_SECRET"
    ```
    
5. Start the server
    ```javascript
    npm start [OR] yarn start
    ```

6. Now run the app
    ```javacript
    localhost:[PORT] PORT=3917 (By default)
    ```

7. Enjoy!!

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

