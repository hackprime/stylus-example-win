Example project for development with Stylus on Windows

## What is stylus

Stylus is a cool and flexible stylesheet language, that is more better than pure css.

## Install

1) [Install NodeJS](https://nodejs.org/en/download/) (Windows Installer)

2) Open Command Prompt (press Win+R, type 'cmd', press enter)

3) Run the following command to check nodejs:
```
node -v
```
If nodejs has been installed correctly you will see the version of the nodejs. Otherwise - try to resart system.

4) Extract example project into arbitrary folder

5) type in command prompt:
```
cd C:\path\to\extracted\folder
```
The command prompt prefix has changed to "**C:\path\to\extracted\folder>**"

*NOTE: if you are using disk other then C: - you need to type `X:` before 'cd' command. X - Letter of disk where you extracted the project*

6) Run following commands
```
npm install -g yarn
```
```
yarn install
```
```
yarn global add gulp
```
All node packages will be installed in node_modules folder in current folder

7) run `gulp watch`
```
gulp watch
```
Then, if you found `styles.css` file in public/css, installalion is success


## How to code

* How it works: you write code in cool and flexible stylus language → `gulp` translates your code into ugly but understandable fo browsers CSS code

* Stylus files (*.styl) are resided in `src/stylus` folder of this project

* stylus→css translation process is fully automated. Every tyme you changing stylys files, gulp will rebuild it instantly. Just keep `gulp watch` command running.

* gulp cannot run itself at system start, so when you start working you need to run gulp. To run gulp: use steps 2, 5 and 7 of installation section

* gulp can accidentally stop when there is an error in stylus files, then gulp will show you where it stops. In that case: fix error and run gulp again. Error example:
```
ParseError: C:/Users/yury/apptest/src/stylus/home.styl:35:3
   31|       &-green
   32|         background-color green
   33|         color #eee
   34|
   35| .f
---------^
# NOTE: The error is on line 35 of file home.styl
```

* To stop gulp manually: press ctrl+C


## Code style requirements

* CSS classes naming conversation - [BEM](https://en.bem.info/)
    * block: `block_name`
    * element: `block_name__element_name`
    * modifier: `block_name__element_name-modifier_name`

* Try to separate logic between several files
    * common constants and common macrosses should be stored in common/ folder
    * common component styles, that can be used in a several pages, should be stored in `components/component_or_components_group_name.styl`
    * page-specific styles should be stored in pages/page_name.styl

* Single codeblock indentation = two spaces `  `
```
body
  color white
  div
    border 1px solid black
```

* names of variables shoud be in uppercase, word separator - underscore. Example: `COLOR_MAIN_TITLE = #ff0000`


## Links:

* [Stylus Documentation](http://stylus-lang.com/)

* [BEM Quick Start](https://en.bem.info/methodology/quick-start/)

* [Install NodeJS and npm on windows](http://blog.teamtreehouse.com/install-node-js-npm-windows)

