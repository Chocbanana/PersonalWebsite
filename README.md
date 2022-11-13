# My Website

A webite built with bare-bones Gatsby and bootstrap! This is meant to be a basic website to show off my content in various forms, but is easily customizable to fit different content and to feature various pages in the homepage.

There are some key areas to modify, in order to customize the website and for functionality:

- **Navbar and site descriptions:** The most important file is `src/data/site-pages.js`. Each entry must have a unique key (obviously), and is used to build out the navbar. The info is also used by individual pages to auto-fill-out the pages, and the homepage featured page thumbnails. Following info is per entry:
  - **title:** Required. The SEO title of the page
  - **url:** Required. Actual path, is exactly the same as the `pages/` folder layout.
  - **description:** Required. Used to generally describe the page.
  - **folder:** Optional. If set, the folder in which the dropdown menu the site goes in.
  - **image:** If set, the image used in the homepage thumbail

- **Images:** In the `src/images` folder (duh), change them in order to change profile pic, background, etc


- **Styling:** Most styling is done inline within the React components themselves, using Boostrap; however, the Bootstrap main color themes (along with other colors) are set in `src/components/index.scss`, the main and only sass file controlling everything. Modify the vars in there for color modification.
- **Site details:** In the Gatsby standard `gatsby-config.js`, for now just contains the social media links
- **Page creation:** Standard Gastby layout, uses the titles of the pages in `src/pages` as the site urls along with any folders.


## 🚀 Quick start, running, deploying

1. **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd PersonalWebsite
    npx gatsby develop
    ```
    This will serve a local dev version of the site to view.

1.  **Build**

    I run build seperately from deployment because there are in fact some differences from the dev site and the fully built one, and have found some changes when I don't run `npm run clean`.
    ```shell
    npm run clean
    npm run build
    npm run serve
    ```
1.  **Deploy**

    The code is served using Github Pages, on the repo [Chocbanana.github.io](https://github.com/Chocbanana/Chocbanana.github.io). Deployment is setup to use that.
    ```shell
    npm run deploy
    ```




## The standard Gatsby file structure

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.


