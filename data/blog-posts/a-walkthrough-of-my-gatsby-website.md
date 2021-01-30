---
templateKey: blog-post
path: /writing/a_walkthrough_of_my_gatsby_website
date: 2021-01-30T23:42:17.497Z
title: A walkthrough of my Gatsby website
---
I've been writing code for a while now and working as a community leader for 2.5 years for GDG and now for Facebook DevC. I was always satisfied with what I am busy with, but there was always an idea in the back of my head "hey, why won't you start sharing stuff with the world as a blogger or speaker?". And now I am finally feeling like I should do that.

Just to get to know each other a little I feel like sharing some tech details of my website which I created to organize my digital "face" is a good idea.

### [](https://dev.to/fuzzyreason/a-walkthrough-of-my-gatsby-website-1caf#the-stack)The stack

Since I am a great fan of JAMstack and React and after some time digging I realize that I want to stick with Gatsby. And now let's check some other tools that I am using.

* Styled Components with [Emotion](https://emotion.sh/docs/introduction).
* [Netlify](https://www.netlify.com/) as a deployment service that is great and super user friendly, it is always a pleasure to work with Netlify
* [Netlify CMS](https://www.netlifycms.org/) for content management is quite straightforward and easy to configure, so I decided to stick with it

And thanks to the tremendous Gatsby ecosystem there are a lot of great plugins that make the development process extremely satisfying, here is the list:

* [gatsby-plugin-react-helmet](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/) - for meta purposes
* [gatsby-plugin-preact](https://www.gatsbyjs.com/plugins/gatsby-plugin-preact/) - which is the most simple way to minify the resulted bundle size
* [gatsby-source-filesystem](https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/) - if you are not familiar with the stack, this plugin is the connection line for your data and markup
* [gatsby-transformer-remark](https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/) - which is a parsing tool for MD files with listed options: [gatsby-remark-relative-images](https://www.gatsbyjs.com/plugins/gatsby-remark-relative-images/), [gatsby-remark-images](https://www.gatsbyjs.com/plugins/gatsby-remark-images/), [gatsby-remark-reading-time](https://www.gatsbyjs.com/plugins/gatsby-remark-reading-time/), [gatsby-remark-prismjs](https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/)
* [gatsby-transformer-sharp](https://www.gatsbyjs.com/plugins/gatsby-transformer-sharp/) and [gatsby-plugin-sharp](https://www.gatsbyjs.com/plugins/gatsby-plugin-sharp/) - for images optimization
* [gatsby-plugin-manifest](https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/) - so your website can live as a PWA
* [gatsby-plugin-offline](https://www.gatsbyjs.com/plugins/gatsby-plugin-offline/) - for an offline support
* [gatsby-plugin-netlify](https://www.gatsbyjs.com/plugins/gatsby-plugin-netlify/) - to automatically generate a _headers file for HTTP headers and redirects configuration on Netlify
* [gatsby-plugin-netlify-cms](https://www.gatsbyjs.com/plugins/gatsby-plugin-netlify-cms/) - which automatically generates `admin/index.html` where CMS lives
* [gatsby-plugin-emotion](https://www.gatsbyjs.com/plugins/gatsby-plugin-emotion/) - which gives the Emotion support
* [gatsby-plugin-optimize-svgs](https://www.gatsbyjs.com/plugins/gatsby-plugin-optimize-svgs/) - a great tool for auto svg optimization, so you don't have to manually compress svg files
* [gatsby-plugin-react-svg](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-svg/) - to drop in svg-react-loader to gatsby webpack config.

That's about it for the stack to fit my website's needs and make the development process quite comfortable and automatic in some aspects.

### [](https://dev.to/fuzzyreason/a-walkthrough-of-my-gatsby-website-1caf#performance)Performance

And that's the moment when I can only applause to the Gatsby team without dropping a single word

![Lighthouse stats](/static/img/cms/screenshot-2021-01-31-at-02.46.57.png "Lighthouse stats")

[fuzzyreason.io](http://fuzzyreason.io/) is not a perfect example to demonstrate Gatsby's performance beauty and power, but it does provide all of the tools necessary to build blazing fast products.

### [](https://dev.to/fuzzyreason/a-walkthrough-of-my-gatsby-website-1caf#to-summarise)To summarise

Sharing some details about my website is a blogging starting point and introduction in some way, which I am happy about. My website is open-source on [github](https://github.com/FuzzyReason/fuzzyreason.io), so if you feel like something that can be done better and more fancy I am more than happy to chat or you can [open an issue](https://github.com/FuzzyReason/fuzzyreason.io/issues/new).

Thanks for reading and stay tuned for the upcoming posts!