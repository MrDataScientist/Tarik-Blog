const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/tennakdi/Documents/challenge/gatsby-blog/Tarik-Blog/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/tennakdi/Documents/challenge/gatsby-blog/Tarik-Blog/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/tennakdi/Documents/challenge/gatsby-blog/Tarik-Blog/src/pages/index.js"))),
  "component---src-pages-page-2-tsx": hot(preferDefault(require("/Users/tennakdi/Documents/challenge/gatsby-blog/Tarik-Blog/src/pages/page-2.tsx"))),
  "component---src-pages-page-3-tsx": hot(preferDefault(require("/Users/tennakdi/Documents/challenge/gatsby-blog/Tarik-Blog/src/pages/page-3.tsx"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/tennakdi/Documents/challenge/gatsby-blog/Tarik-Blog/src/templates/blog-post.js")))
}

