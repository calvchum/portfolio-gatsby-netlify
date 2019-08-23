---
path: "/projects/ecze"
date: "2019-07"
title: "Ecze"
tags: ["react", "graphql", "contentful", "netlify", "gatsby", "figma"]
organisation: "Darkgreen Design"
---

### background

Client wanted a React site designed and built from scratch with the following features: SEO friendly, blog, blog filter, email sign-up. This is Phase 1, the next phase will integrate the Shopify Storefront API.

---

### the stack

**Gatsby** was chosen as the React framework due to it being a Server Side Rendered static site, which is more SEO friendly. This also allowed the use of neat Gatsby features such as fluid image loading and link hover pre-fetching. The result is, this is probably the fastest Ecze related website on the web right now.

For the backend, rather than build a Content Management System (CMS) from scratch, we opted to save development time by using a headless CMS - in this case, **Contentful** was chosen. This turned out to be a great choice as their API was very easy to integrate. Importantly, the client has a secure and robust back-end UI from where to manage their content.

To make the most of Contentful and Gatsby, it's best to use the query language **GraphQL**. The biggest benefit to using Graphql in this project was being able to re-use React components by simply changing the query.

It was important for us to have continuous deployment in order to get feedback from the client so we could iterate in an agile fashion. For this purpose I found **Netlify** to be well integrated with the existing stack - with their webhooks worked well with Github and Contentful. Automatically rebuilding the site whenever new content or code is pushed means less developer maintence after handover.

[GitHub repo →](https://github.com/calvchum/ecze-dev-beta/)

[Figma designs →](https://www.figma.com/file/gsufT5ukTgwTlG3pYCS7nLUE/ECZE-WIREFRAMES?node-id=0%3A1)

[Visit the site →](http://ecze.netlify.com)
