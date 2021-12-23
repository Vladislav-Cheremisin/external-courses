# Kanban board (Webpack configuration)

## Features

-   `.js` files process by `babel` - JavaScript compiler
-   configured `webpack-dev-server`
-   `HtmlWebpackPlugin` simplifies creation of HTML files to serve your webpack bundles
-   `.css` files processed by `mini-css-extract-plugin` and `css-loader`.
-   `.html` files processed by `html-loader`.

## Installation

-   Install NodeJS from [official website](https://nodejs.org/en/)
-   Clone project files on your pc
-   Open terminal and install dependencies by using command:

```bash
npm install
```

-   Build project by using command:

```bash
npm run build
```

-   If all steps completed succesfull you will be able to find builded project files in `dist` folder

## Development mode

-   If you want to run project in development mode (with webpack-dev-server) use command:

```bash
npm run dev
```